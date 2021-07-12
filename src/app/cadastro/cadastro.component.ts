import { Component, OnInit, Input } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  login = {email: "", password: ""};


  constructor(
    private cadastroService: CadastroService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  cadastrar(): void {

    this.cadastroService.cadastrar(this.login).subscribe( res => {
      this.router.navigate(['/'])
      alert(res.body.msg);

    }, err => {  
      alert(err.error.msg);
    });

  }

}
