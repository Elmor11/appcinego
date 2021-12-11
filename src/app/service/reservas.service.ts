import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservas } from '../models/reservas';

@Injectable ({
  providedIn: "root"
})
export class ReservasService {

  constructor(private http: HttpClient) { }

  ReservasUrl = 'https://cinego.herokuapp.com/reservas/';

  public lista(): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(this.ReservasUrl + 'lista');
  }

  public detail(id: number): Observable<Reservas> {
    return this.http.get<Reservas>(this.ReservasUrl +  `detail/${id}`);
  }

  public detailPrograma(pelicula: string): Observable<Reservas> {
    return this.http.get<Reservas>(this.ReservasUrl +  `detail/${pelicula}`);
  }

  public save(Reservas: Reservas): Observable<any> {
    return this.http.post<any>(this.ReservasUrl + 'create', Reservas);
  }

  public update(id: number, Reservas: Reservas): Observable<any> {
    return this.http.put<any>(this.ReservasUrl + `update/${id}`, Reservas);
  }

  public delete(id:number): Observable<any> {
    return this.http.delete<any>(this.ReservasUrl + `delete/${id}`);
  }

}
