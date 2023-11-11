import { Data } from "@angular/router";
import { IMascota } from "../Interfaces/mascota";

export class Mascota implements IMascota{
  id: number | null = null;
  nombre: string = '';
  tipo: "Perro" | "Gato" | "" = "" ;
  sexo: "F" | "M" | "" = "";
  foto: string = "";
  tamanio: "Pequeño" | "Mediano" | "Grande" | "" = "";
  nacimiento: Data | null = null;
  caracteristicas: string = "";
  estado: "En adopcion" | "En transito" | "Adoptado" | "" = "En adopcion";
  idAdminCarga: number | null = null;

  constructor(mascota?:any){

    this.id = mascota == undefined ? null : mascota.id;
    this.nombre = mascota == undefined ? '' : mascota.nombre;
    this.tipo = mascota == undefined ? '' : mascota.tipo;
    this.sexo = mascota == undefined ? '' : mascota.sexo;
    this.foto = mascota == undefined ? '' : mascota.foto;
    this.tamanio = mascota == undefined ? '' : mascota.tamaño;
    this.nacimiento = mascota == undefined ? '' : mascota.nacimiento;
    this.caracteristicas = mascota == undefined ? '' : mascota.caracteristicas;
    this.estado = mascota == undefined ? 'En adopcion' : mascota.estado;
    this.idAdminCarga = mascota == undefined ? null : mascota.idAdminCarga;
  }
}
