import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import config from '../utils/config';

const url = `http://localhost:8091/api/account`;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private client: HttpClient) { }
  getAll(): any {
    return this.client.get(`${url}/allAccounts`);
  }

  addAccount(newAccount: any): any {
    return this.client.post(`${url}/defaultAccount/add`, newAccount);
  }

  get(idAccount: number): any {
    return this.client.get(`${url}/getAccount/${idAccount}`);
  }

  deleteAccount(idAccount: number): Observable<any> {
      return this.client.delete(`${url}/DeleteAccount/${idAccount}`, {responseType: 'text'});
  }

  getAccountsClient(): any {
    var headers_object = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
    return this.client.get(`${url}/allAccountsClient`, {headers: headers_object});
  }

  getColumnsAccount(idDefault: number): any {
    return this.client.get(`${url}/allColumnsDefault/${idDefault}`);
  }

}
