import { Component, OnInit } from '@angular/core';
import { AnimalEstimacaoService } from './animal-estimacao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-estimacao',
  templateUrl: './animal-estimacao.component.html',
  styleUrls: ['./animal-estimacao.component.css']
})
export class AnimalEstimacaoComponent implements OnInit {


  clienteId? : string | null = "";
  animalEstimacao = {nome: "", raca: "", peso: 0, dataNascimento: new Date};

  constructor(
    private animalEstimacaoService: AnimalEstimacaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId');
  }

  cadastrar(): void {

    this.animalEstimacaoService.cadastrar(this.clienteId,this.animalEstimacao).subscribe( res => {
      this.router.navigate(['/menuAnimal', this.clienteId])
      alert("Animal Cadastrado com sucesso!");
    }, err => {  
      alert(err.error.msg);
    });

  }

}
