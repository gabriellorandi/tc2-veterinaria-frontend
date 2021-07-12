import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalEstimacaoComponent } from './animal-estimacao/animal-estimacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAnimalComponent } from './menu-animal/menu-animal.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "cliente", component: ClienteComponent},
  {path: "animalEstimacao", component: AnimalEstimacaoComponent},
  {path: "animalEstimacao/:clienteId", component: AnimalEstimacaoComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "menu", component: MenuComponent},
  {path: "menuAnimal", component: MenuAnimalComponent},
  {path: "menuAnimal/:clienteId", component: MenuAnimalComponent},
  {path: "**", component: LoginComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
