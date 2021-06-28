import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url: string = 'http://localhost:8081/api/web';
  
  constructor(private http: HttpClient) { }

  listarProdutos(pagina?: number, registroPorPagina?: number): Observable<any> {
    var params = '';
    if (pagina > 0) {
      params += `pagina=${pagina}`;
    }

    if (registroPorPagina > 0) {
      params += params.length > 0 ? `&registroPorPagina=${registroPorPagina}` : `registroPorPagina=${registroPorPagina}`;
    }

    return this.http.get(this.url + '/produtos' + (params.length > 0 ? '?' + params : ''), httpOptions)
      .pipe();
  }

  obterProduto(id: number): Observable<any>{
    return this.http.get(`${this.url}/produtos/${id}`, httpOptions)
    .pipe();
  }

  alteraProduto(produto: Produto): Observable<any> {
    return this.http.put(`${this.url}/produtos/${produto.id}`, produto).pipe();
  }

  criarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.url}/produtos`, produto).pipe();
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/produtos/${id}`).pipe();
  }

}

export class Produto{
  id?: number;
  nome: string;
  valor: number;
  tamanho?: number;
  fabricacao: boolean;
}
