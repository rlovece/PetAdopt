import { IComentario } from "../Interfaces/IComentario";

export class Comentario implements IComentario{
  id: number | null= null;
  nombre: string = '';
  puntaje:  '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '' = '';
  fecha: String = '';
  comentario: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.nombre = comentario == undefined ? '' : comentario.nombre;
    this.puntaje = comentario == undefined ? '' : comentario.puntaje;
    this.fecha = comentario == undefined ? new Date().toLocaleDateString(): comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}
