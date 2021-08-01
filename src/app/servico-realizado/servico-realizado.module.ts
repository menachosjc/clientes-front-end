import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoRealizadoRoutingModule } from './servico-realizado-routing.module';
import { ServicoRealizadoFormComponent } from './servico-realizado-form/servico-realizado-form.component';
import { ServicoRealizadoListaComponent } from './servico-realizado-lista/servico-realizado-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicoRealizadoFormComponent, 
    ServicoRealizadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoRealizadoRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ServicoRealizadoFormComponent,
    ServicoRealizadoListaComponent
  ]
})
export class ServicoRealizadoModule { }
