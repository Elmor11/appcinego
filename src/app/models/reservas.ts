export class Reservas {
    id!: number;
    id_usuario: number;
    pelicula: string;
    ubicacion_silla: string;
    valor_pago: number;

    constructor(id_usuario: number, pelicula: string, ubicacion_silla: string, valor_pago: number) {
    this.id_usuario = id_usuario;
    this.pelicula = pelicula;
    this.ubicacion_silla = ubicacion_silla;
    this.valor_pago = valor_pago;
    }
}


