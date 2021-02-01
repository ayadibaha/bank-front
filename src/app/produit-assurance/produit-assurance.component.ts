/**
 * Crée par le partenaire assurance
 */
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../services/authentication.service';
import { ContratAssuranceService } from '../services/contrat-assurance.service';
import { ProduitAssuranceService } from '../services/produit-assurance.service';

@Component({
  selector: 'app-produit-assurance',
  templateUrl: './produit-assurance.component.html',
  styleUrls: ['./produit-assurance.component.css']
})
export class ProduitAssuranceComponent implements OnInit {
  userType = "insurance_partner";
  selectedProduct = null;
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;
  newProduitName = "";
  newProduitDescription = "";
  garanties = [];
  produitAssurance = [];

  constructor(private contratService: ContratAssuranceService, private service: ProduitAssuranceService, private modalService: NgbModal, private auth: AuthenticationService) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size:"lg",
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
    this.service.add_produit(newProduit).subscribe((response)=>{
     this.produitAssurance.push(response);
    });
  }

  saveDemande(){
    let garanties = {};
    for(let i in this.selectedProduct.template.garanties){
      let g = this.selectedProduct.template.garanties[i];
      garanties[g.name] = g.value?g.value:null;
    }
    console.log(garanties);
    let newDemande = {
      produit: this.selectedProduct.id,
      userContractId:this.auth.currentUser()?this.auth.currentUser().contractId:"",
      garanties: garanties
    }
    this.contratService.demanderProduitAssurance(newDemande).subscribe((response)=>{
      console.log(response);
    })
  }
}
