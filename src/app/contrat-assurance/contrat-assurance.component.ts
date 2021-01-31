/**
 * Consulté par le partenaire assurance
 */
import { Component, OnInit } from '@angular/core';
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
  constructor(private contratService: ContratAssuranceService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      let user : any=jwtDecode(localStorage.getItem("token"));
      this.role = user.rol;
    }
    this.contratService.getAll().subscribe((response:any)=>{
      console.log("response", response);
      this.contracts = response;
    })
  }

  acceptContract(id_contract){
    this.contratService.accepterContrat(id_contract).subscribe((response)=>{
      console.log(response);
    });
  }

  refuseContract(id_contract){
    this.contratService.refuserContrat(id_contract).subscribe((response)=>{
      console.log(response);
    });;
  }
}
