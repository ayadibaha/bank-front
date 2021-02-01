import {Component, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ProduitAssuranceService} from '../services/produit-assurance.service';
import {DOCUMENT} from '@angular/common';
import {AccountService} from '../services/account.service';
import {ContratAssuranceService} from '../services/contrat-assurance.service';
import {ContratAccountService} from '../services/contrat-account.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userType = 'employee';
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  selectedAccount = null;
  accounts = [];
  newAccountName = '';
  newAccountDescription = '';
  columns = [];
  column: any;
  @Input() event: Event;
  idEvent: any;
  contrats = [];
  role = '';
  cl = '';
  columnsDefault = [];
  carac = [];
  accountsCl = null;

  constructor(private contratService: ContratAccountService, private service: AccountService, private modalService: NgbModal, private renderer: Renderer2, @Inject(DOCUMENT) private document) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }


  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      const user: any = jwtDecode(localStorage.getItem('token'));
      this.role = user.rol;
    }
    this.service.getAll().subscribe((response) => {
      console.log(response);
      this.accounts = response;
    });
    this.service.getAccountsClient().subscribe((response) => {
      console.log('les account clients', response);
      this.accountsCl = response;
      this.accounts.forEach(account => {
        let verif = false;
        this.accountsCl.forEach(contrat => {
          if (account.idAccount === contrat.account.idAccount){
            verif = true;
            if (contrat.etat) account.etat = 1;
            else account.etat = 2;
          }
        });
        if (!verif) account.etat = 3;
        console.log(account);
      });
      console.log(this.accounts);
    });
  }

  open(content) {
    this.columns = [];
    this.newAccountName = '';
    this.newAccountDescription = '';
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openColumns(content, data) {
    this.selectedAccount = data;
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addColumns() {
    this.columns.push({
      name: '',
      type: '',
      isRequiredByUser: false,
    });

  }

  saveAccount() {
    const newAccount = {
      type: this.newAccountName,
      description: this.newAccountDescription,
      defaultAccount: {
        columnsAccounts: this.columns
      }
    };
    this.service.addAccount(newAccount).subscribe((response) => {
      this.accounts.push(response);
    });
  }

  /*openModal(content, data)
  {
    this.service.get(data.idAccount)
      .subscribe(data => {
          this.column = data;
          console.log(this.column);
          console.log(this.event);
        },
        error => {
          console.log(error);
        });
    console.log(this.column);
    this.idEvent = this.event;
  }*/

  openModal(content, data) {
    this.service.get(data.idAccount)
      .subscribe(data => {
          this.column = data;
          console.log(this.column);
          console.log(this.event);
        },
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }));
    console.log(this.column);
    this.idEvent = this.event;
  }

  deleteAccount(idAccount: number) {
    if (confirm('Êtes-vous sur de vouloir supprimer ce compte?')) {
      this.service.deleteAccount(idAccount).subscribe((response) => {
        this.ngOnInit();
      });
    }
  }


  saveContrat() {
    console.log('Selected account :', this.selectedAccount);
    let cols = {};
    this.selectedAccount.defaultAccount.columnsAccounts.map((col)=>{
      cols[col.name] = col.value;
      if (col.requiredByUser === false) {
        cols[col.name] = col.defaultValue;
      }
    })
    const newContrat = {
      accountId : this.selectedAccount.idAccount,
      caracteristiques: cols
    };
    if (confirm('Êtes-vous sur de vouloir adhérer à ce compte?\nUn administrateur devra examiner votre demande !')) {
      this.contratService.adhererAccount(newContrat).subscribe((response) => {
        this.contrats.push(response);
      });
    }
  }

  isClientUnique(idAccount) {
    this.contratService.isUnique(idAccount).subscribe((response) => {
      console.log("le client est ", response);
      this.cl = response;
    });
  }

}
