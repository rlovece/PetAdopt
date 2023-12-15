import { ISolicitud } from "../Interfaces/ISolicitud";

export class Solicitud implements ISolicitud{
  id : number | null= null;
  fecha: string = '';
  idMascota: number ;
  idAdoptante: number;
  estado:  'Pendiente' | 'Aprobada' | 'Rechazada' | '' = '';
  comentarios: string;
  fechaAdopcion: string;
  foto: string;

  constructor(solicitud?:any){
    this.id =  solicitud == undefined ? null : solicitud.id;
    this.fecha = solicitud == undefined ? '' : solicitud.fecha;
    this.idMascota = solicitud == undefined ? null : solicitud.idMascota;
    this.idAdoptante = solicitud == undefined ? null : solicitud.idAdoptante;
    this.estado = solicitud == undefined ? '' : solicitud.estado;
    this.comentarios = solicitud == undefined ? '' : solicitud.comentarios;
    this.fechaAdopcion = solicitud == undefined ? '' : solicitud.fechaAdopcion;
    this.foto = solicitud == undefined ? '' : solicitud.foto;
  }

}
