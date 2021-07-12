import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from './login';
import { config } from '../util/config';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  entrar(login: Login): Observable<any> {
    let body = new HttpParams();
    body = body.set("email", login.email);
    body = body.set("password", String(login.password));
    return this.http.post(config.baseUrl + "/login", body, {observe: "response"});

  }
}
