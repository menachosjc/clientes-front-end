import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { servicoRealizado } from './../servicoRealizado';
import { ServicoRealizadoService } from './../../servico-realizado.service';

@Component({
  selector: 'app-servico-realizado-form',
  templateUrl: './servico-realizado-form.component.html',
  styleUrls: ['./servico-realizado-form.component.css']
})
export class ServicoRealizadoFormComponent implements OnInit {
  clientes: Cliente[] = [];
  servico: servicoRealizado;

  constructor(
    private clientesService: ClientesService,
    private servicoService : ServicoRealizadoService
  ){
    this.servico = new servicoRealizado();
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      response => this.clientes = response
    );
  }

  onSubmit(){
    this.servicoService.salvar(this.servico).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
