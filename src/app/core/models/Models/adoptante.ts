import { IAdoptante } from "../Interfaces/IAdoptante";

export class Adoptante implements IAdoptante{
  id: number | null= null;
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  domicilio: string = '';
  telefono: string = '';
  email: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.nombre = comentario == undefined ? '' : comentario.nombre;
    this.apellido = comentario == undefined ? '' : comentario.apellido;
    this.dni = comentario == undefined ? '' : comentario.dni;
    this.domicilio = comentario == undefined ? '' : comentario.domicilio;
    this.telefono = comentario == undefined ? '' : comentario.telefono;
    this.email = comentario == undefined ? '' : comentario.email;
  }

}
