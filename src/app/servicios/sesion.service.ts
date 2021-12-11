import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  public usuario: Usuario={
    id:0,
    nombre:'',
    correoElectronico:'',
    username:'',
    contrasena:''
  };




  constructor() { 
    this.leerStorage();
  }


  getUsuario(): Usuario{
    return this.usuario;
  }
  setUsuario(usuario:Usuario):void{
    this.usuario=usuario;
    this.guardarStorage();
    
  }

  resetUsuario():void{
    this.usuario = {
      id:0,
      nombre:'',
      correoElectronico:'',
      username:'',
      contrasena:''
    }
    this.guardarStorage();
  }

  guardarStorage():void{
    sessionStorage.setItem("usuario",JSON.stringify(this.usuario));
  }

  leerStorage():void{
    if(sessionStorage.getItem("usuario")){
      let datos= sessionStorage.getItem("usuario");
      this.usuario=JSON.parse(JSON.stringify(datos));
    }
  }
}
