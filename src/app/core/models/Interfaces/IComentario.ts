export interface IComentario{
    id: number | null;
    puntaje: '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '';
    fecha: String;
    comentario: string;
    idAdoptante: number | null;
  }

export interface IComentarioView{
    puntaje: '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐'| '⭐⭐⭐⭐⭐' | '';
    fecha: String;
    comentario: string;
    nombreAdoptante: string;
}
