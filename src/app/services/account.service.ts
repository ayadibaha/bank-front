import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const url = `http://localhost:8091/api/account`;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private client: HttpClient) { }
  getAll(): any {
    return this.client.get(`${url}/allAccounts`);
  }

  addAccount(newAccount: any): any{
    return this.client.post(`${url}/defaultAccount/add`, newAccount);
  }

}
