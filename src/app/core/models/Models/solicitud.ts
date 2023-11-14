import { ISolicitud } from "../Interfaces/ISolicitud";

export class Solicitud implements ISolicitud{
  id : number | null= null;
  fecha: string = '';
  idAnimal: number ;
  idAdoptante: number | null= null;
  estado:  'Pendiente' | 'Aprobada' | 'Rechazada' | '' = '';
  comentarios: string;
  fechaAdopcion: string;
  foto: string;

  constructor(solicitud?:any){
    this.id =  solicitud == undefined ? null : solicitud.id;
    this.fecha = solicitud == undefined ? '' : solicitud.fecha;
    this.idAnimal = solicitud == undefined ? null : solicitud.idAnimal;
    this.idAdoptante = solicitud == undefined ? null : solicitud.idAdoptante;
    this.estado = solicitud == undefined ? '' : solicitud.estado;
    this.comentarios = solicitud == undefined ? '' : solicitud.comentarios;
    this.fechaAdopcion = solicitud == undefined ? '' : solicitud.fechaAdopcion;
    this.foto = solicitud == undefined ? '' : solicitud.foto;
  }

}
