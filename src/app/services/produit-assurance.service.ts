import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
const port = 8091;
const url = `http://localhost:${port}`;

@Injectable({
  providedIn: 'root'
})
export class ProduitAssuranceService {

  constructor(private client: HttpClient) { }

  getAll(): any{
    return this.client.get(`${url}/api/produit/all`);
  }

  add_produit(newProduit: any): any{
    return this.client.post(`${url}/api/produit/default/add`, newProduit);
  }
}
