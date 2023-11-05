import { IAdopcion } from "../Interfaces/IAdopcion";

export class Adopcion implements IAdopcion{
  id : number | null= null;
  idSolicitudAdopcion: number | null= null;
  fecha: string = '';
  foto: string = '';
  comentarios: string = '';
  idAdminCarga: number | null= null;

  constructor(adopcion?:any){
    this.id =  adopcion == undefined ? null : adopcion.id;
    this.idSolicitudAdopcion = adopcion == undefined ? null : adopcion.idSolicitudAdopcion;
    this.fecha = adopcion == undefined ? '' : adopcion.fecha;
    this.foto = adopcion == undefined ? '' : adopcion.foto;
    this.comentarios = adopcion == undefined ? '' : adopcion.comentarios;
    this.idAdminCarga = adopcion == undefined ? null : adopcion.idAdminCarga;
  }
}
