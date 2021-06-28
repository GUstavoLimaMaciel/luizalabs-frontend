import { Component, OnInit } from '@angular/core';
import { Produto, ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  
  ngOnInit() {
  }

  produtos: Array<Produto> = new Array<Produto>();

  constructor(
    private produtoService: ProdutosService
  ) {
    this.getProdutoList();
  }

  getProdutoList(){
    this.produtoService.listarProdutos().subscribe(
      (res) => {
        this.produtos = res.data;
      }
    );
  }

  deletar(id: number){
    this.produtoService.deletarProduto(id).subscribe(
      (res) => {
        this.getProdutoList();
      }
    );
  }
}
