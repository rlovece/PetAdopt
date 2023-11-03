export interface IMascota {
  id: number | null;
  nombre: string;
  tipo: "Perro" | "Gato" | "";
  sexo: "F" | "M" | "";
  foto:  string;
  tamanio: "Pequeño" | "Mediano" | "Grande" | "";
  edad: number | null;
  caracteristicas: string;
  estado: "En adopcion" | "En transito" | "Adoptado" | "";
  idAdminCarga: number | null;
}

export interface IFiltroMascota {
  nombre: string;
  tipo: "Perro" | "Gato" | "";
  sexo: "F" | "M" | "";
  tamanio: "Pequeño" | "Mediano" | "Grande" | "";
  edad: number | null;
  estado: "En adopcion" | "En transito" | "Adoptado" | "";
}
