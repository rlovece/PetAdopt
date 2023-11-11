export interface ISolicitud{
  id: number | null;
  fecha: string;
  idAnimal: number ;
  idAdoptante: number | null;
  comentarios: string;
  estado: string;
  fechaAdopcion: string;
  foto: string;
}

