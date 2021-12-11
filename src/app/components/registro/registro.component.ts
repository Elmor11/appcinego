import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
  
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  error: boolean= false;
  ingresado: boolean=false;
  

  constructor(private formBuilder: FormBuilder,private apiService:ApiService) { 
    this.formulario= this.formBuilder.group({
      nombre : ['', Validators.required],
      correoElectronico:['', [Validators.required,Validators.email]],
      username:['',Validators.required],
      contrasena:['',Validators.required]
  });

  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched;
  }
  get correoElectronicoNoValido(){
    return this.formulario.get('correoElectronico')?.invalid && this.formulario.get('correoElectronico')?.touched;
  }
  get usernameNoValido(){
    return this.formulario.get('username')?.invalid && this.formulario.get('username')?.touched;
  }
  get contrasenaNoValido(){
    return this.formulario.get('contrasena')?.invalid && this.formulario.get('contrasena')?.touched;
  }

  guardarDatos(): any{
    if(this.formulario.invalid){

      Object.values(this.formulario.controls).forEach(control =>{ 
        control.markAsTouched();
    })
    return;
  }
    this.error = false;
    let usuario={
      id:0,
      nombre:'',
      correoElectronico:'',
      username:'',
      contrasena:''

    }
    this.apiService.addUsuario(this.formulario.value.nombre,this.formulario.value.correoElectronico,this.formulario.value.username,this.formulario.value.contrasena).subscribe((response)=>{
      console.log("hola");
      usuario = JSON.parse(JSON.stringify(response));
      console.log(usuario);

      if (usuario.id==0){
        this.error=true;
      }
      else{
        this.error=false;
        this.ingresado=true;
      }
    })
    
  }
}
