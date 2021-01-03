import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const port = 8091;
const url = `http://localhost:${port}`

@Injectable({
  providedIn: 'root'
})
export class OperationBancaireService {


  constructor(private client: HttpClient) { }

  createVirement(op: Object): Observable<Object> {
    return this.client.post(`${url}/api/operation/addOp`, op);
  }

  getoperationList(): Observable<any> {
    return this.client.get(`${url}/api/operation/getAll`);
  }
}
