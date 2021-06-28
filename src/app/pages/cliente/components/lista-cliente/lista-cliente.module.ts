import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './lista-cliente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([ { path: '', component: ListaClienteComponent }, ]),
    CommonModule
  ],
  declarations: [ListaClienteComponent],
  exports: [ListaClienteComponent]
})
export class ListaClienteModule { }
