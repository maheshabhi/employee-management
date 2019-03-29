import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable()

export class AuthService {
    
    APIBASEURL: String = environment.APIBASEURL;
    constructor(private _httpClient:HttpClient) {}
    

    login(userData) {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log("inside auth service, logging in");
        return this._httpClient.post(this.APIBASEURL + '/employeesAuth/login', userData);
    }
}