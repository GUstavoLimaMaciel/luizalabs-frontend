import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoOuEditaClienteComponent } from './novo-ou-edita-cliente.component';
import { MatFormFieldModule, MatInputModule, MatListModule, MatSelectModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
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
  declarations: [NovoOuEditaClienteComponent],
  exports: [NovoOuEditaClienteComponent],
  providers: [
    MatFormFieldModule,
    MatInputModule]
})
export class NovoOuEditaClienteModule { }
