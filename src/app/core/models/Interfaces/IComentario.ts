export interface IComentario{
    id: number | null;
    nombre: string;
    puntaje: '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '';
    fecha: Date | null;
    comentario: string;
  }
