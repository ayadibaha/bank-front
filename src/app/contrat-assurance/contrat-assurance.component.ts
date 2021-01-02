import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
