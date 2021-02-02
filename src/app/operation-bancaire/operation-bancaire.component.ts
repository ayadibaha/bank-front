import { Component, OnInit } from '@angular/core';
import {OperationBancaire} from '../module/OperationBancaire';
import {OperationBancaireService} from '../services/operation-bancaire.service';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-operation-bancaire',
  templateUrl: './operation-bancaire.component.html',
  styleUrls: ['./operation-bancaire.component.css']
})
export class OperationBancaireComponent implements OnInit {
  operationBancaire = [];
  closeResult: string;
  modalOptions: NgbModalOptions;
  op: OperationBancaire = new OperationBancaire();
  submitted = false;
  constructor(private obs: OperationBancaireService , private router: Router , private modalService: NgbModal) { }

  ngOnInit(): void {

    // this.obs.getoperationList().subscribe((response) => {
    //   this.operationBancaire = response;
    // });

  }
  open(content) {
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
  save() {
    this.obs.createVirement(this.op).subscribe(data => {
        console.log(data)
        this.op = new OperationBancaire();
        this.gotoList();
      },
      error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listOperationBancaire']);
  }

  ExtratBancairePDF () {
    this.obs.ExtratBancairePDF().subscribe(x => { const blob = new  Blob([x], {type: 'operation/pdfreport})'} );
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return ;
      }
      const  data = window.URL.createObjectURL(blob);
      const  link = document.createElement('a');
      link.href = data;
      link.download = 'operation.pdf';
      link.dispatchEvent(
        new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
    });
  }
}





