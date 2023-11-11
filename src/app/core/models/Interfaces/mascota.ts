import { Data } from "@angular/router";

export interface IMascota {
  id: number | null;
  nombre: string;
  tipo: "Perro" | "Gato" | "";
  sexo: "F" | "M" | "";
  foto:  string;
  tamanio: "Pequeño" | "Mediano" | "Grande" | "";
  nacimiento: Data | null;
  caracteristicas: string;
  estado: "En adopcion" | "En transito" | "Adoptado" | "";
  idAdminCarga: number | null;
}

