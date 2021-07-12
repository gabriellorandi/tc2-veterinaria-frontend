import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../util/config';
import { AnimalEstimacao } from '../animal-estimacao/animal-estimacao'

@Injectable({
  providedIn: 'root'
})
export class AnimalEstimacaoService {

  constructor(private http : HttpClient) { }

  delete(clienteId: any, id: any) : Observable<any> {
    return this.http.delete(config.baseUrl + "/cliente/"+clienteId+"/animal/"+id);
  }

  getAll(clienteId: any) : Observable<AnimalEstimacao[]> {
    return this.http.get<AnimalEstimacao[]>(config.baseUrl + "/cliente/"+clienteId+"/animal");
  }


  cadastrar(clienteId: any, animal: AnimalEstimacao): Observable<any> {
    let body = new HttpParams();
    body = body.set("nome", animal.nome);
    body = body.set("peso", String(animal.peso));
    body = body.set("raca", String(animal.raca));
    body = body.set("dataNascimento", String(animal.dataNascimento));

    return this.http.post(config.baseUrl + "/cliente/"+clienteId+ "/animal", body, {observe: "response"});

  }
}
