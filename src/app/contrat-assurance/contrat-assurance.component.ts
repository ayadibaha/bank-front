/**
 * Consulté par le partenaire assurance
 */
import { Component, OnInit } from '@angular/core';
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
  constructor(private contratService: ContratAssuranceService) { }

  ngOnInit(): void {
    this.contratService.getAll().subscribe((response:any)=>{
      console.log("response", response);
      this.contracts = response;
    })
  }

}
