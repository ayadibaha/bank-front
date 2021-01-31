import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import config from '../utils/config';

const url = `http://localhost:8091/api/contrat-account`;

@Injectable({
  providedIn: 'root'
})
export class ContratAccountService {


  constructor(private client: HttpClient) { }
  getAll(): any {
    return this.client.get(`${url}/allContratAccounts`);
  }

  approveContratAccount(idContrat: number): Observable<any> {
    return this.client.put(`${url}/${idContrat}/approve`, {responseType: 'text'});
  }

  adhererAccount(newContrat: any): any {
    var headers_object = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
    return this.client.post(`${url}/add`, newContrat, {headers: headers_object});
  }

  isUnique(idAccount: number): any {
    return this.client.get(`${url}/isUnique/${idAccount}`);
  }

  getCaracContrat(idContrat: number): any{
    return this.client.get(`${url}/getCaracContrat/${idContrat}`);
  }
}
