export interface IComentario{
    id: number | null;
    nombre: string;
    puntaje: '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '';
    fecha: String;
    comentario: string;
  }
