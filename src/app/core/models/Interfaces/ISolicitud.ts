export interface ISolicitud{
  id: number | null;
  fecha: string;
  idMascota: number ;
  idAdoptante: number | null;
  comentarios: string;
  estado: string;
  fechaAdopcion: string;
  foto: string;
}

