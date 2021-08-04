import { Observable } from 'rxjs';
import { servicoRealizado } from './servico-realizado/servicoRealizado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoRealizadoService {
  apiURL: string = environment.apiURL + '/servicos-realizados';
  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoRealizado: servicoRealizado) : Observable<servicoRealizado>{
    return this.http.post<servicoRealizado>(this.apiURL, servicoRealizado);
  }

}
