import { Injectable } from '@angular/core';
import{HttpClient,HttpHandler, HttpHeaders} from'@angular/common/http';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL:string="https://cinego.herokuapp.com/"
  constructor(private httpCliente:HttpClient) { 

  }
  login(username:String, contrasena:String){
    const peticion = `${this.URL}usuarios/login`;
    const usuario:any={
      username,
      contrasena
    };
    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json;charset="utf-8"'
    })
    return this.httpCliente.post(peticion, usuario,{headers} )
                          .pipe(map((data:any)=>{
                            return data;
                          }))
  }

  addUsuario(nombre:String,correoElectronico:String, username:String,
    contrasena:String){
      const peticion =`${this.URL}usuarios/registrar`;

      const usuario:any ={
        nombre,
        correoElectronico,
        username,
        contrasena
      };

      const headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json;charset="utf-8"'
      })

      return this.httpCliente.post(peticion,usuario, {headers})
                            .pipe(map((data:any)=>{
                              return data;

                            }));



  }
}