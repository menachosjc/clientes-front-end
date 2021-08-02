import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { servicoRealizado } from '../servicoRealizado'
import { ClientesService } from '../../clientes.service'

@Component({
  selector: 'app-servico-realizado-form',
  templateUrl: './servico-realizado-form.component.html',
  styleUrls: ['./servico-realizado-form.component.css']
})
export class ServicoRealizadoFormComponent implements OnInit {
  clientes: Cliente[] = [];
  servico: servicoRealizado;

  constructor(
    private clientesService: ClientesService
  ){ 
    this.servico = new servicoRealizado();
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      response => this.clientes = response
    );
  }

  onSubmit(){
    console.log(this.servico);
  }

}
