import { IComentario, IComentarioView } from "../Interfaces/IComentario";

export class Comentario implements IComentario{
  id: number ;
  idAdoptante: number | null= null;
  puntaje:  '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '' = '';
  fecha: String = '';
  comentario: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.idAdoptante = comentario == undefined ? null : comentario.idAdoptante;
    this.puntaje = comentario == undefined ? '' : comentario.puntaje;
    this.fecha = comentario == undefined ? new Date().toLocaleDateString(): comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}

export class ComentarioView implements IComentarioView{
  nombreAdoptante: string = '';
  puntaje:  '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '' = '';
  fecha: String = '';
  comentario: string = '';

  constructor(comentario?:any){
    this.nombreAdoptante = comentario == undefined ? '' : comentario.nombre;
    this.puntaje = comentario == undefined ? '' : comentario.puntaje;
    this.fecha = comentario == undefined ? new Date().toLocaleDateString(): comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}
