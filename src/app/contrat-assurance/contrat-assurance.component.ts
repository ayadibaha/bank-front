/**
 * Consulté par le partenaire assurance
 */
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import jwtDecode from 'jwt-decode';
import { ContratAssuranceService } from '../services/contrat-assurance.service';

interface ContractType {
  produit_assurance: String;
  date_creation: String;
  isValid: Boolean;
  garanties: [];
}

@Component({
  selector: 'app-contrat-assurance',
  templateUrl: './contrat-assurance.component.html',
  styleUrls: ['./contrat-assurance.component.css']
})
export class ContratAssuranceComponent implements OnInit {
  contracts: ContractType[] = [];
  role: number = 0;
  modalOptions: NgbModalOptions;
  closeResult: string;
  message: string;
  choosedContract: number = 0;
  constructor(private contratService: ContratAssuranceService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      let user: any = jwtDecode(localStorage.getItem("token"));
      this.role = user.rol;
    }
    this.contratService.getAll().subscribe((response: any) => {
      console.log("response", response);
      this.contracts = response;
    })
  }

  open(content, contractId) {
    this.choosedContract = contractId;
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
  acceptContract(id_contract) {
    this.contratService.accepterContrat(id_contract).subscribe((response) => {
      console.log(response);
    });
  }

  refuseContract(id_contract) {
    this.contratService.refuserContrat(id_contract, this.message).subscribe((response) => {
      console.log(response);
    });;
  }
}
