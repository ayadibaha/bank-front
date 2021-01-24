import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

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
    return this.client.post(`${url}/add`, newContrat);
  }
}
