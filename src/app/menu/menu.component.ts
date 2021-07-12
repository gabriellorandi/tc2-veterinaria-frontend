import { query } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listaClientes: Cliente[];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { 
    this.listaClientes = [];
  }

  listaAnimal(clienteId: any): void {
    this.router.navigate(['/menuAnimal', clienteId])
  }

  deletarCliente(id: any): void {
    this.clienteService.delete(id).subscribe( res => {
      alert("Cliente deletado com sucesso");
      this.carregarCliente();
    }, err => {  
      alert(err.error.msg);
    });
  }

  carregarCliente(): void {
    this.clienteService.getAll().subscribe( res => {
      this.listaClientes = res;
    });
  }

  ngOnInit(): void {
    this.carregarCliente();
  }

  cadastrarCliente(): void {
    this.router.navigate(['/cliente'])
  }

}
