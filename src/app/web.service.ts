import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise':

@Injectable
export class WebService {

    //inject http and 
    constructor(private http: Http) {}

    getMessages(){
        return this.http.get('http://localhost:58630/api/messages').toPromise;
    }
}