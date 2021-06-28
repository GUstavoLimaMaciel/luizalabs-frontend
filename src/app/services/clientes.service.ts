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
export class ClientesService {
  url: string = 'http://localhost:8081/api/web';
  
  constructor(private http: HttpClient) { }

  listarClientes(pagina?: number, registroPorPagina?: number): Observable<any> {
    var params = '';
    if (pagina > 0) {
      params += `pagina=${pagina}`;
    }

    if (registroPorPagina > 0) {
      params += params.length > 0 ? `&registroPorPagina=${registroPorPagina}` : `registroPorPagina=${registroPorPagina}`;
    }

    return this.http.get(this.url + '/clientes' + (params.length > 0 ? '?' + params : ''), httpOptions)
      .pipe();
  }

  obterCliente(id: number): Observable<any>{
    return this.http.get(`${this.url}/clientes/${id}`, httpOptions)
    .pipe();
  }

  alteraCliente(cliente: Cliente): Observable<any> {
    return this.http.put(`${this.url}/clientes/${cliente.id}`, cliente).pipe();
  }

  criarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.url}/clientes`, cliente).pipe();
  }

  deletarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.url}/clientes/${id}`).pipe();
  }

}

export class Cliente{
  id?: number;
  nome: string;
  cpf: string;
  sexo?: string;
  email: string;
}
