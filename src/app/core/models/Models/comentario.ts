import { IComentario } from "../Interfaces/IComentario";

export class Comentario implements IComentario{
  id: number | null= null;
  nombre: string = '';
  puntaje:  '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '' = '';
  fecha: Date | null = new Date;
  comentario: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.nombre = comentario == undefined ? '' : comentario.nombre;
    this.puntaje = comentario == undefined ? '' : comentario.puntaje;
    this.fecha = comentario == undefined ? null : comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}
