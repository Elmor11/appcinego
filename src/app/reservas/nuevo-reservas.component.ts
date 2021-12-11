import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservas } from '../models/reservas';
import { ReservasService } from '../service/reservas.service';

@Component({
  selector: 'app-nuevo-reservas',
  templateUrl: './nuevo-reservas.component.html',
  styleUrls: ['./nuevo-reservas.component.css']
})
export class NuevoReservasComponent implements OnInit {

  id_usuario: number = 0;
  pelicula: string = '';
  ubicacion_silla: string = '';
  valor_pago: number = 0;

  constructor(private ReservasService: ReservasService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const reservas = new Reservas(this.id_usuario, this.pelicula, this.ubicacion_silla, this.valor_pago);
    this.ReservasService.save(reservas).subscribe(
      data => {
        this.toastr.success('Creado','OK', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje,'Error', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }
    )
  }

}
