import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-novo-ou-edita-produto',
  templateUrl: './novo-ou-edita-produto.component.html',
  styleUrls: ['./novo-ou-edita-produto.component.css']
})
export class NovoOuEditaProdutoComponent implements OnInit {
  
  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    fabricacao: new FormControl('', Validators.required),
    tamanho: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  });

  produto: Produto = new Produto();

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getProduto(id);
    }
  }

  getProduto(id: number){
    this.produtoService.obterProduto(id).subscribe(
      (res) => {
        this.produto = res.data;
        this.produtoForm.patchValue({
          nome: this.produto.nome,
          fabricacao: this.produto.fabricacao,
          tamanho: this.produto.tamanho,
          valor: this.produto.valor
        });
      }
    );
  }

  salvar(){
    if(this.produto.id){
      this.edit();
    } else {
      this.new();
    }
  }

  edit(){
    this.produto.nome = this.produtoForm.value.nome;
    this.produto.fabricacao = this.produtoForm.value.fabricacao;
    this.produto.tamanho = this.produtoForm.value.tamanho;
    this.produto.valor = this.produtoForm.value.valor;
    this.produtoService.alteraProduto(this.produto).subscribe(
      (res) => {
        this.back();
      }
    );
  }

  new(){
    this.produtoService.criarProduto(this.produtoForm.value).subscribe(
      (res) => {
        this.back();
      }
    );
  }

  back(){
    this.router.navigateByUrl(`/produto`, {
      preserveFragment: false,
      fragment: 'top'
    });
  }

}
