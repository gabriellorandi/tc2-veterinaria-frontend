import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnimalEstimacaoComponent } from './animal-estimacao/animal-estimacao.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { MenuAnimalComponent } from './menu-animal/menu-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnimalEstimacaoComponent,
    ClienteComponent,
    CabecalhoComponent,
    RodapeComponent,
    CadastroComponent,
    MenuComponent,
    MenuAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
