import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../login/login';
import { config } from '../util/config';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http : HttpClient) { }

  cadastrar(login: Login): Observable<any> {
    let body = new HttpParams();
    body = body.set("email", login.email);
    body = body.set("password", String(login.password));
    return this.http.post(config.baseUrl + "/signup", body, {observe: "response"});

  }
}
