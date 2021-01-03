import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import config from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        // this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentTokenValue(): string {
        return localStorage.getItem("token");
    }

    login(username, password) {
        return this.http.post<any>(`${config.serverURL}/api/login`, { email:username, password })
            .pipe(map(response => {
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
