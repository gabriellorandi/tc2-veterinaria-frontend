import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login = {email: "", password: ""};

  constructor(
    private loginService : LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  entrar(): void {

    this.loginService.entrar(this.login).subscribe( res => {
      this.router.navigate(['/menu'])
    }, err => { 
      alert(err.error.msg);
    });
  }

}
