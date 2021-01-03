/**
 * Crée par le partenaire assurance
 */
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
  userType = "client";
  selectedProduct = null;
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  newProduitName = "";
  newProduitDescription = "";
  garanties = [];
  produitAssurance = [];
  constructor(private service: ProduitAssuranceService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
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

  openModal(content, data){
    this.selectedProduct = data;
    console.log(data);
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
      type: "",
      isRequired: false
    })
  }

  saveProduit(){
    let newProduit = {
      libelle: this.newProduitName,
      description: this.newProduitDescription,
      template: {
        garanties: this.garanties
      }
    }
    console.log("New produit", newProduit);
    // this.service.add_produit(newProduit).subscribe((response)=>{
    //  this.produitAssurance.push(response);
    // });
  }
}
