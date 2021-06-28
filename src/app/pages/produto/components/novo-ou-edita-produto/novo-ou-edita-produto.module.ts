import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoOuEditaProdutoComponent } from './novo-ou-edita-produto.component';
import { MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [NovoOuEditaProdutoComponent],
  exports: [NovoOuEditaProdutoComponent],
  providers: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class NovoOuEditaProdutoModule { }
