import { IUsuario } from "../Interfaces/IUsuario";

export class Usuario implements IUsuario{
  id: number| null= null;
  nombre: string ='';
  apellido: string ='';
  dni: string ='';
  telefono: string ='';
  direccion: string ='';
  email: string ='';
  contrasenia: string ='';
  admin: boolean= true;

  constructor(usuario?:any){
    this.id =  usuario == undefined ? null : usuario.id;
    this.nombre = usuario == undefined ? '' : usuario.nombre;
    this.apellido = usuario == undefined ? '' : usuario.apellido;
    this.dni = usuario == undefined ? '' : usuario.dni;
    this.telefono = usuario == undefined ? '' : usuario.telefono;
    this.direccion = usuario == undefined ? '' : usuario.direccion;
    this.email = usuario == undefined ? '' : usuario.email;
    this.contrasenia = usuario == undefined ? '' : usuario.contrasenia;
    this.admin = usuario == undefined ? false : usuario.admin;
  }
}
