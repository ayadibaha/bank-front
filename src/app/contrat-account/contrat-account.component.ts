import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {AccountService} from '../services/account.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {DOCUMENT} from '@angular/common';
import {ContratAccountService} from '../services/contrat-account.service';
import {OperationBancaire} from '../module/OperationBancaire';

@Component({
  selector: 'app-contrat-account',
  templateUrl: './contrat-account.component.html',
  styleUrls: ['./contrat-account.component.css']
})
export class ContratAccountComponent implements OnInit {

  modalOptions: NgbModalOptions;
  contrats = [];
  valeur = '';

  constructor(private service: ContratAccountService, private modalService: NgbModal, private renderer: Renderer2, @Inject(DOCUMENT) private document) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }
  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.contrats = response;
    });
  }

  approveContrat(idContrat: number) {
    if (confirm('Êtes-vous sur de vouloir approuver ce contrat?')) {
      this.service.approveContratAccount(idContrat).subscribe((response) => {
        this.ngOnInit();
      });
    }
  }

  isContratUnique(): void{

  }



}
