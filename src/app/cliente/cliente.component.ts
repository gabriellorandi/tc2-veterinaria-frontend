import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente = { cpf: "", nome: "",sexo: "", dataNascimento: new Date};

  sexoSelecionado = "";

  sexo = [
    {id: "MASCULINO", nome: "Masculino"},
    {id: "FEMININO", nome: "Feminino"}
  ]

  constructor(  
    private clienteService: ClienteService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.sexoSelecionado = this.sexo[0].id;
  }

  cadastrar(): void {

    this.cliente.sexo = this.sexoSelecionado;

    this.clienteService.cadastrar(this.cliente).subscribe( res => {
      this.router.navigate(['/menu'])
      alert("Cliente cadastrado com sucesso!");

    }, err => {  
      alert(err.error.msg);
    });

  }

}
