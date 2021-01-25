import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  getAllNA() {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.client.get(`${config.serverURL}/api/user/not-approved`, {
      headers: headers_object
    });
  }
  
  acceptUser(id) {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.client.put(`${config.serverURL}/api/user/approve/${id}`, {
      headers: headers_object
    });
  }
}
