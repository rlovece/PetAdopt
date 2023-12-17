import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-listados-usuarios',
  templateUrl: './listados-usuarios.component.html',
  styleUrls: ['./listados-usuarios.component.css']
})
export class ListadosUsuariosComponent {

  @Input() inputUsuarios: Array<Usuario> = [];
  @Output() usuarioAeditar: EventEmitter<Usuario> = new EventEmitter();
  @Output() usuarioAborrar: EventEmitter<Usuario> = new EventEmitter();

  constructor( private usuarioService: ApiUsuariosService){}

  editarUsuario(usu: Usuario) {
    this.usuarioAeditar.emit(usu);
  }

  borrarUsuario (usu: Usuario) {
    this.usuarioAborrar.emit(usu);
  }

  contarFilas():number{
    var filas = document.querySelectorAll("#tablaListado tr");
    var totalFilas = filas.length-2;
    return totalFilas;
  }

}

