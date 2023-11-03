export interface IMascota {
  id: number | null;
  nombre: string;
  tipo: "Perro" | "Gato" | "";
  sexo: "F" | "M" | "";
  foto:  string;
  tamaño: "Pequeño" | "Mediano" | "Grande" | "";
  edad: number | null;
  caracteristicas: string;
  estado: "En adopcion" | "En transito" | "Adoptado" | "";
  idAdminCarga: number | null;
}
