import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  constructor(
    private clienteService: ClientesService
  ) {
    this.getClienteList();
  }

  clientes: Array<Cliente> = new Array<Cliente>();

  getClienteList(){
    this.clienteService.listarClientes().subscribe(
      (res) => {
        this.clientes = res.data;
      }
    );
  }

  ngOnInit() {
  }

  deletar(id: number){
    this.clienteService.deletarCliente(id).subscribe(
      (res) => {
        this.getClienteList();
      }
    );
  }
}
