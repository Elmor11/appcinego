import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarReservasComponent } from './reservas/editar-reservas.component';
import { ListaReservasComponent } from './reservas/lista-reservas.component';
import { NuevoReservasComponent } from './reservas/nuevo-reservas.component';
import { RegistroComponent } from "./components/registro/registro.component";
import{ LoginComponent } from "./components/login/login.component";
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import{ComponentsAppComponent}from './components/components-app/components-app.component'

const routes: Routes = [
  {path: 'components-app', component: ComponentsAppComponent },
    {path: 'registro', component: RegistroComponent },
    {path: 'login', component: LoginComponent },
    {path: 'cerrar-sesion', component: CerrarSesionComponent},
    {path: 'reservar', component:NuevoReservasComponent},
    {path: 'misReservas', component: ListaReservasComponent },
  {path: 'nuevo', component: NuevoReservasComponent},
  {path: 'editar/:id', component: EditarReservasComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
