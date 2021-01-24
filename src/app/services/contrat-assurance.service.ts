import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../utils/config';
@Injectable({
  providedIn: 'root'
})
export class ContratAssuranceService {

  constructor(private client: HttpClient) { }

  getAll(){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.client.get(`${config.serverURL}/api/contrat-assurance/all`, {
      headers: headers_object
    });
  }

  demanderProduitAssurance(demande){
    return this.client.post(`${config.serverURL}/api/contrat-assurance/add`, demande);
  }
}
