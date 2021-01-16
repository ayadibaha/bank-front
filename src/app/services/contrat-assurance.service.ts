import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../utils/config';
@Injectable({
  providedIn: 'root'
})
export class ContratAssuranceService {

  constructor(private client: HttpClient) { }

  getAll(){
    return this.client.get(`${config.serverURL}/api/contrat-assurance/all`)
  }

  demanderProduitAssurance(demande){
    return this.client.post(`${config.serverURL}/api/contrat-assurance/add`, demande);
  }
}
