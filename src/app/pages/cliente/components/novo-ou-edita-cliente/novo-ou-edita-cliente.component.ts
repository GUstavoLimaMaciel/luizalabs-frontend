import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, ClientesService } from 'src/app/services/clientes.service';
import { validarCPF } from 'src/app/shared/cpf.validator';

@Component({
  selector: 'app-novo-ou-edita-cliente',
  templateUrl: './novo-ou-edita-cliente.component.html',
  styleUrls: ['./novo-ou-edita-cliente.component.css']
})
export class NovoOuEditaClienteComponent implements OnInit {

  constructor(
    private clienteService: ClientesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  clienteForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', { validators: [Validators.required, validarCPF()], updateOn: 'blur' }),
    sexo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  cliente: Cliente = new Cliente();

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.getCliente(id);
    }
  }

  getCliente(id: number){
    this.clienteService.obterCliente(id).subscribe(
      (res) => {
        this.cliente = res.data;
        this.clienteForm.patchValue({
          nome: this.cliente.nome,
          cpf: this.cliente.cpf,
          sexo: this.cliente.sexo,
          email: this.cliente.email
        });
      }
    );
  }

  salvar(){
    if(this.cliente.id){
      this.edit();
    } else {
      this.new();
    }
  }

  edit(){
    this.cliente.cpf = this.clienteForm.value.cpf;
    this.cliente.nome = this.clienteForm.value.nome;
    this.cliente.email = this.clienteForm.value.email;
    this.cliente.sexo = this.clienteForm.value.sexo;
    this.clienteService.alteraCliente(this.cliente).subscribe(
      (res) => {
        this.back();
      }
    );
  }

  new(){
    this.clienteService.criarCliente(this.clienteForm.value).subscribe(
      (res) => {
        this.back();
      }
    );
  }

  back(){
    this.router.navigateByUrl(`/cliente`, {
      preserveFragment: false,
      fragment: 'top'
    });
  }
}
