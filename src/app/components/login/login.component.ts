import { Component, OnInit } from '@angular/core';
import{ApiService} from 'src/app/servicios/api.service';
import {Router} from '@angular/router';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit{

  formulario:FormGroup;
  error: boolean=false;

  constructor(private apiService:ApiService, private router:Router, private formBuilder:FormBuilder, private sesionService:SesionService) {
    this.formulario = this.formBuilder.group({
      username:['', Validators.required],
      contrasena:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  get usernameNoValido(){
    return this.formulario.get('username')?.invalid && this.formulario.get('username')?.touched;
  }
  get contrasenaNoValido(){
    return this.formulario.get('contrasena')?.invalid && this.formulario.get('contrasena')?.touched;
  }

  verificarDatos():any{
    
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control =>{ 
        control.markAsTouched();
    })
      return;
    }
    this.error= false;
    let usuario={
      id:0,
      nombre:'',
      correoElectronico:'',
      username:'',
      contrasena:''
    }
   
    this.apiService.login(this.formulario.value.username, this.formulario.value.contrasena).subscribe((response)=>{
     
      usuario = JSON.parse(JSON.stringify(response));
     if (usuario.id==null){
        this.error=true;
      }
      else{
       if(Number.isInteger(usuario.id)){
         //guardar datos en el local Storage
         this.error=false;

         console.log(usuario);
        this.sesionService.setUsuario(usuario);

         this.router.navigate(['/components-app'])
       }
        else{
          this.error=true;
        }
      }
    })
  }

}
