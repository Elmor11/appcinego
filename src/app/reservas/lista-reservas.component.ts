import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reservas } from '../models/reservas';
import { ReservasService } from '../service/reservas.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {

  Reservas: Reservas[] = [];

  constructor(private ReservasService: ReservasService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.ReservasService.lista().subscribe(
      data => {
        this.Reservas = data;
      }, 
      err => {
        console.log(err);
      }
    )
  }

  borrarReservas(id: number) {
    this.ReservasService.delete(id).subscribe(
      data => {
        this.toastr.success('Eliminado','OK', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
        this.cargarReservas();
      },
      err => {
        this.toastr.error(err.error.mensaje,'Error', {
          timeOut:3000, positionClass: 'toast-top-center'
        });
      }
    )
  }

}
