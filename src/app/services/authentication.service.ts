import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import config from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) {
        // this.currentUser = this.currentUserSubject.asObservable();
    }
    
     currentUser() : any{
        
        return localStorage.getItem("token")?jwtDecode(localStorage.getItem("token")):null;
    }

    public get currentTokenValue(): string {
        return localStorage.getItem("token");
    }

    login(username, password) {
        return this.http.post<any>(`${config.serverURL}/api/login`, { email:username, password })
            .pipe(map(response => {
                console.log("Login", response);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', response.accessToken);
                return response;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('token');
        // this.currentUserSubject.next(null);
    }
}
