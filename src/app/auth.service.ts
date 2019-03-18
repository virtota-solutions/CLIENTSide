import { Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {

    BASE_URL = 'http://localhost:4200/';

    constructor(private http: Http) {}
    
    register(user) {
        this.http.post(this.BASE_URL + 'register', user).subscribe();
    }
}