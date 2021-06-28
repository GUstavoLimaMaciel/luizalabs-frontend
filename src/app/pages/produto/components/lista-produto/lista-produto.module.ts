import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([ { path: '', component: ListaProdutoComponent }, ]),
    CommonModule
  ],
  declarations: [ListaProdutoComponent],
  exports: [ListaProdutoComponent]
})
export class ListaProdutoModule { }
