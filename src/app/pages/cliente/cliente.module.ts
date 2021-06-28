import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteModule } from './components/lista-cliente/lista-cliente.module';
import { NovoOuEditaClienteModule } from './components/novo-ou-edita-cliente/novo-ou-edita-cliente.module';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { NovoOuEditaClienteComponent } from './components/novo-ou-edita-cliente/novo-ou-edita-cliente.component';
import { ClientesService } from 'src/app/services/clientes.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'cliente',
    component: ListaClienteComponent
  },
  {
    path: 'cliente/:id',
    component: NovoOuEditaClienteComponent
  },
  {
    path: 'cliente/novo',
    component: NovoOuEditaClienteComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ListaClienteModule,
    NovoOuEditaClienteModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [ClientesService]
})
export class ClienteModule { }
