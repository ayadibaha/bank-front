import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ProduitAssuranceService} from '../services/produit-assurance.service';
import {DOCUMENT} from '@angular/common';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  accounts = [];
  newAccountName = '';
  columns = [];


  constructor(private service: AccountService, private modalService: NgbModal, private renderer: Renderer2, @Inject(DOCUMENT) private document) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }


  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.accounts = response;
    });
  }

  open(content) {
    this.columns = [];
    this.newAccountName = '';
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
      template: {
        column: this.columns
      }
    };
    this.service.addAccount(newAccount).subscribe((response) => {
      this.accounts.push(response);
    });
  }

}
