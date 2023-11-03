import { IAdopcion, IAnimal, IComentario, ISolicitud, IUsuario } from "./Interfaces";

export class Animal implements IAnimal{
  id: number | null= null;
  nombre: string = '';
  tipo: string = '';
  sexo: string = '';
  foto: string = '';
  tamaño: string = '';
  edad: number | null= null;
  caracteristicas: string = '';
  estado: string = '';
  idAdminCarga: number | null= null;

  constructor(animal?:any){
    this.id =  animal == undefined ? null : animal.id;
    this.nombre = animal == undefined ? '' : animal.nombre;
    this.tipo = animal == undefined ? '' : animal.tipo;
    this.sexo = animal == undefined ? '' : animal.sexo;
    this.foto = animal == undefined ? '' : animal.foto;
    this.tamaño = animal == undefined ? '' : animal.tamaño;
    this.edad = animal == undefined ? null : animal.edad;
    this.caracteristicas = animal == undefined ? '' : animal.caracteristicas;
    this.estado = animal == undefined ? '' : animal.estado;
    this.idAdminCarga = animal == undefined ? null : animal.idAdminCarga;
  }

}


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

export class Solicitud implements ISolicitud{
  id : number | null= null;
  fecha: string = '';
  idAnimal: number | null= null;
  idUsuario: number | null= null;
  estado: string = '';

  constructor(solicitud?:any){
    this.id =  solicitud == undefined ? null : solicitud.id;
    this.fecha = solicitud == undefined ? '' : solicitud.fecha;
    this.idAnimal = solicitud == undefined ? null : solicitud.idAnimal;
    this.idUsuario = solicitud == undefined ? null : solicitud.idUsuario;
    this.estado = solicitud == undefined ? '' : solicitud.estado;
  }
}

export class Adopcion implements IAdopcion{
  id : number | null= null;
  idSolicitudAdopcion: number | null= null;
  fecha: string = '';
  foto: string = '';
  comentarios: string = '';
  idAdminCarga: number | null= null;

  constructor(adopcion?:any){
    this.id =  adopcion == undefined ? null : adopcion.id;
    this.idSolicitudAdopcion = adopcion == undefined ? null : adopcion.idSolicitudAdopcion;
    this.fecha = adopcion == undefined ? '' : adopcion.fecha;
    this.foto = adopcion == undefined ? '' : adopcion.foto;
    this.comentarios = adopcion == undefined ? '' : adopcion.comentarios;
    this.idAdminCarga = adopcion == undefined ? null : adopcion.idAdminCarga;
  }
}

export class Comentario implements IComentario{
  id: number | null= null;
  idUsuario: number | null= null;
  puntaje: number | null= null;
  fecha: string = '';
  comentario: string = '';

  constructor(comentario?:any){
    this.id =  comentario == undefined ? null : comentario.id;
    this.idUsuario = comentario == undefined ? null : comentario.idUsuario;
    this.puntaje = comentario == undefined ? null : comentario.puntaje;
    this.fecha = comentario == undefined ? '' : comentario.fecha;
    this.comentario = comentario == undefined ? '' : comentario.comentario;
  }
}
