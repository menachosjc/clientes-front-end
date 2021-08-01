import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoRealizadoFormComponent } from './servico-realizado-form/servico-realizado-form.component';
import { ServicoRealizadoListaComponent } from './servico-realizado-lista/servico-realizado-lista.component';


const routes: Routes = [
  { path: 'servico-realizado-form', 'component': ServicoRealizadoFormComponent },
  { path: 'servico-realizado-listagem', 'component': ServicoRealizadoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRealizadoRoutingModule { }
