import { IAdoptante } from "../Interfaces/IAdoptante";

export class Adoptante implements IAdoptante{
  id: number ;
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  domicilio: string = '';
  telefono: string = '';
  email: string = '';

  constructor(adoptante?:any){
    this.id =  adoptante == undefined ? null : adoptante.id;
    this.nombre = adoptante == undefined ? '' : adoptante.nombre;
    this.apellido = adoptante == undefined ? '' : adoptante.apellido;
    this.dni = adoptante == undefined ? '' : adoptante.dni;
    this.domicilio = adoptante == undefined ? '' : adoptante.domicilio;
    this.telefono = adoptante == undefined ? '' : adoptante.telefono;
    this.email = adoptante == undefined ? '' : adoptante.email;
  }

}
