  export interface IAnimal{
    id: number | null;
    nombre: string;
    tipo: string;
    sexo: string;
    foto: string;
    tamaño: string;
    edad: number | null;
    caracteristicas: string;
    estado: string
    idAdminCarga: number | null;
  }

  export interface IUsuario{
    id: number | null;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    direccion: string;
    email: string;
    contrasenia: string;
    admin: boolean;
    }


  export interface ISolicitud{
    id: number | null;
    fecha: string;
    idAnimal: number | null;
    idUsuario: number | null;
    estado: string;
  }

  export interface IAdopcion{
    id: number | null;
    idSolicitudAdopcion: number | null;
    fecha: string;
    foto: string;
    comentarios: string;
    idAdminCarga: number | null;
  }

  export interface IComentario{
    id: number | null;
    idUsuario: number | null;
    puntaje: number | null;
    fecha: string;
    comentario: string;
  }
