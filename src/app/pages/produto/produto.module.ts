import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutoModule } from './components/lista-produto/lista-produto.module';
import { NovoOuEditaProdutoModule } from './components/novo-ou-edita-produto/novo-ou-edita-produto.module';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { NovoOuEditaProdutoComponent } from './components/novo-ou-edita-produto/novo-ou-edita-produto.component';
import { ProdutosService } from 'src/app/services/produtos.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'produto',
    component: ListaProdutoComponent
  },
  {
    path: 'produto/:id',
    component: NovoOuEditaProdutoComponent
  },
  {
    path: 'produto/novo',
    component: NovoOuEditaProdutoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ListaProdutoModule,
    NovoOuEditaProdutoModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [ProdutosService, HttpClientModule]
})
export class ProdutoModule { }
