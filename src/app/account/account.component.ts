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
      this.accounts = response;
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

  addColumns() {
    this.columns.push({
      name: '',
      type: ''
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


  saveContrat(idAccount: number) {
    const newContrat = {
      accountId : idAccount,
    };
    this.contratService.adhererAccount(newContrat).subscribe((response) => {
      this.contrats.push(response);
    });
  }

}
