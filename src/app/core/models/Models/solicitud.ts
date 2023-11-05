import { ISolicitud } from "../Interfaces/ISolicitud";

export class Solicitud implements ISolicitud{
  id : number | null= null;
  fecha: string = '';
  idAnimal: number | null= null;
  idUsuario: number | null= null;
  estado: string = '';

  constructor(solicitud?:any){
    this.id =  solicitud == undefined ? null : solicitud.id;
    this.fecha = solicitud == undefined ? '' : solicitud.fecha;
    this.idAnimal = solicitud == undefined ? null : solicitud.idAnimal;
    this.idUsuario = solicitud == undefined ? null : solicitud.idUsuario;
    this.estado = solicitud == undefined ? '' : solicitud.estado;
  }
}
