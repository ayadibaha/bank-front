import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import config from '../utils/config';
const port = 8091;
const url = `http://localhost:${port}`

@Injectable({
  providedIn: 'root'
})
export class CreditService {


  constructor(private client: HttpClient) {
  }

  createCredit(cr: Object): Observable<Object> {
    return this.client.post(`${url}/api/Credit/addCredit`, cr);
  }
  getAll(): Observable<any> {
    return this.client.get(`${url}/api/Credit/all`);
  }
}
