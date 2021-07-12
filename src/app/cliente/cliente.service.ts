import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../util/config';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  delete(id: any) : Observable<any> {
    return this.http.delete(config.baseUrl + "/cliente/"+id);
  }

  getAll() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(config.baseUrl + "/cliente");
  }

  cadastrar(cliente: Cliente): Observable<any> {
    let body = new HttpParams();
    body = body.set("cpf", cliente.cpf);
    body = body.set("sexo", cliente.sexo);
    body = body.set("nome", cliente.nome);
    body = body.set("dataNascimento", String(cliente.dataNascimento));

    return this.http.post(config.baseUrl + "/cliente", body, {observe: "response"});

  }
}
