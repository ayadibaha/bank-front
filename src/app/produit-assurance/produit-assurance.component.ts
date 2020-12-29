import { Component, OnInit } from '@angular/core';
import { ProduitAssuranceService } from '../services/produit-assurance.service';

@Component({
  selector: 'app-produit-assurance',
  templateUrl: './produit-assurance.component.html',
  styleUrls: ['./produit-assurance.component.css']
})
export class ProduitAssuranceComponent implements OnInit {
  produitAssurance = [];
  constructor(private service: ProduitAssuranceService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((response)=>{
      this.produitAssurance = response;
    })
  }

}
