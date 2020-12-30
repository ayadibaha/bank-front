import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ProduitAssuranceService } from '../services/produit-assurance.service';

@Component({
  selector: 'app-produit-assurance',
  templateUrl: './produit-assurance.component.html',
  styleUrls: ['./produit-assurance.component.css']
})
export class ProduitAssuranceComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  newProduitName = "";
  garanties = [];
  produitAssurance = [];
  constructor(private service: ProduitAssuranceService, private modalService: NgbModal, private renderer: Renderer2, @Inject(DOCUMENT) private document) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.produitAssurance = response;
    })
  }

  open(content) {
    this.garanties = [];
    this.newProduitName = "";
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

  addGarantie(){
    this.garanties.push({
      name: "",
      type: ""
    })
  }

  saveProduit(){
    let newProduit = {
      libelle: this.newProduitName,
      template: {
        garanties: this.garanties
      }
    }
    this.service.add_produit(newProduit).subscribe((response)=>{
     this.produitAssurance.push(response);
    });
  }
}