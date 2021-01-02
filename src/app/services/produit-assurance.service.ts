import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import config from '../utils/config';
@Injectable({
  providedIn: 'root'
})
export class ProduitAssuranceService {

  constructor(private client: HttpClient) { }

  getAll(): any{
    return this.client.get(`${config.serverURL}/api/produit/all`);
  }

  get(id: number): any {
    return this.client.get(`${config.serverURL}/api/produit/${id}`);
  }

  add_produit(newProduit: any): any{
    return this.client.post(`${config.serverURL}/api/produit/default/add`, newProduit);
  }
}
