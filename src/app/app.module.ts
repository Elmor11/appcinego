import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReservasComponent } from './reservas/lista-reservas.component';
import { NuevoReservasComponent } from './reservas/nuevo-reservas.component';
import { EditarReservasComponent } from './reservas/editar-reservas.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';


import { LoginComponent } from './components/login/login.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ComponentsAppComponent } from './components/components-app/components-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaReservasComponent,
    NuevoReservasComponent,
    EditarReservasComponent,
    CerrarSesionComponent,
    
    LoginComponent,
    MisReservasComponent,
    RegistroComponent,
    ComponentsAppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
