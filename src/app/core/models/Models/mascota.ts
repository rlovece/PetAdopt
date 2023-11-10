import { IMascota } from "../Interfaces/mascota";

export class Mascota implements IMascota{
  filter(arg0: (m: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  id: number | null = null;
  nombre: string = '';
  tipo: "Perro" | "Gato" | "" = "" ;
  sexo: "F" | "M" | "" = "";
  foto: string = "";
  tamanio: "Pequeño" | "Mediano" | "Grande" | "" = "";
  edad: number | null = null;
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
    this.edad = mascota == undefined ? '' : mascota.edad;
    this.caracteristicas = mascota == undefined ? '' : mascota.caracteristicas;
    this.estado = mascota == undefined ? 'En adopcion' : mascota.estado;
    this.idAdminCarga = mascota == undefined ? null : mascota.idAdminCarga;
  }
}
