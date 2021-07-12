import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalEstimacao } from '../animal-estimacao/animal-estimacao';
import { AnimalEstimacaoService } from '../animal-estimacao/animal-estimacao.service';

@Component({
  selector: 'app-menu-animal',
  templateUrl: './menu-animal.component.html',
  styleUrls: ['./menu-animal.component.css']
})
export class MenuAnimalComponent implements OnInit {

  clienteId? : string | null = "";
  listaAnimais: AnimalEstimacao[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalEstimacaoService: AnimalEstimacaoService
  ) { 
    this.listaAnimais = [];
  }

  listaAnimal(): void {
    this.router.navigate(['/animalEstimacao'])
  }

  deletarAnimal(id: any): void {
    this.animalEstimacaoService.delete(this.clienteId,id).subscribe( res => {
      alert("Animal deletado com sucesso");
      this.carregarAnimal(this.clienteId);
    }, err => {  
      alert(err.error.msg);
    });
  }

  carregarAnimal(clienteId: any): void {
    this.animalEstimacaoService.getAll(clienteId).subscribe( res => {
      this.listaAnimais = res;
    });
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId');
    this.carregarAnimal(this.clienteId);
  }

  cadastrarAnimal(): void {
    this.router.navigate(['/animalEstimacao', this.clienteId])
  }

  voltar(): void {
    this.router.navigate(['/menu'])
  }

}
