import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { ServicoRealizadoService } from './servico-realizado.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicoRealizadoModule } from './servico-realizado/servico-realizado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoRealizadoModule

  ],
  providers: [
    ClientesService,
    ServicoRealizadoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
