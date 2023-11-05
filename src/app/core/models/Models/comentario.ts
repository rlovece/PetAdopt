import { IComentario } from "../Interfaces/IComentario";

export class Comentario implements IComentario{
  id: number | null= null;
  idUsuario: number | null= null;
  puntaje: number | null= null;
  fecha: string = '';
  comentario: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.idUsuario = comentario == undefined ? null : comentario.idUsuario;
    this.puntaje = comentario == undefined ? null : comentario.puntaje;
    this.fecha = comentario == undefined ? '' : comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}
