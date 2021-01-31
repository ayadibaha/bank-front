import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {ContratAccountService} from '../services/contrat-account.service';
import {AccountService} from '../services/account.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {DOCUMENT} from '@angular/common';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-mes-comptes',
  templateUrl: './mes-comptes.component.html',
  styleUrls: ['./mes-comptes.component.css']
})
export class MesComptesComponent implements OnInit {

  modalOptions: NgbModalOptions;
  accounts = [];
  role = '';
  caracAccount = [];
  closeResult: string;
  selectedAccount = null;

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
    this.service.getAccountsClient().subscribe((response) => {
      console.log(response);
      this.accounts = response;
    });
  }

  /*caracContrat(idContrat: number) {
      this.contratService.getCaracContrat(idContrat).subscribe((response) => {
        this.caracAccount = response;
      });
  }*/

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content, idContrat: number) {
    this.contratService.getCaracContrat(idContrat).subscribe((response) => {
      this.caracAccount = response;
    });
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
