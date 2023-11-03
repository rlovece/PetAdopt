import { IMascota } from "./mascotas.interfaces";

export class Mastoca implements IMascota{
  id: number | null = null;
  nombre: string = '';
  tipo: "Perro" | "Gato" | "" = "" ;
  sexo: "F" | "M" | "" = "";
  foto: string = "";
  tamaño: "Pequeño" | "Mediano" | "Grande" | "" = "";
  edad: number | null = null;
  caracteristicas: string = "";
  estado: "En adopcion" | "En transito" | "Adoptado" | "" = "";
  idAdminCarga: number | null = null;

  constructor(mascota?:any){

    this.id = mascota == undefined ? null : mascota.id;
    this.nombre = mascota == undefined ? null : mascota.nombre;
    this.tipo = mascota == undefined ? null : mascota.tipo;
    this.sexo = mascota == undefined ? null : mascota.sexo;
    this.foto = mascota == undefined ? null : mascota.foto;
    this.tamaño = mascota == undefined ? null : mascota.tamaño;
    this.edad = mascota == undefined ? null : mascota.edad;
    this.caracteristicas = mascota == undefined ? null : mascota.caracteristicas;
    this.estado = mascota == undefined ? null : mascota.estado;
    this.idAdminCarga = mascota == undefined ? null : mascota.idAdminCarga;
  }
}
