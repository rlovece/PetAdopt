import { Component, Input } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  usuarios: Usuario[] = [];
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelAgregarUsuario: boolean = false;
  mostrarPanelEditarUsuario: boolean = false;
  usuarioAeditar: Usuario | null = null;

  constructor( private usuarioService: ApiUsuariosService ){}

  @Input() inputUsuarios: Usuario = new Usuario();

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.usuarioService.getAllUsuarios()
    .subscribe(
      {
        next: data => {
          this.usuarios=data;
        },
        error: e => console.log(e)
      }
    )
  }

  verPanelAgregar() {
    this.mostrarPanelAgregarUsuario= !this.mostrarPanelAgregarUsuario;
  }

  onAgregarUsuario(nuevoUsuario : Usuario){
    this.mostrarPanelAgregarUsuario = false;
    this.usuarios.push(nuevoUsuario);
  }

  verPanelEditarUsuario() {
    this.mostrarPanelEditarUsuario = !this.mostrarPanelEditarUsuario;
  }

  editarUsuario(usu: Usuario){
    this.mostrarPanelEditarUsuario = true;
    this.usuarioAeditar = usu;
  }

  borrarUsuario(usu: Usuario){
    if (usu.id){
      this.usuarioService.deleteUsuario(usu.id)
      .subscribe(
        {
          next: () => {
            alert(`${usu.nombre} fue eliminada`)
            this.usuarios= this.usuarios.filter(u => u.id != usu.id);
          },
          error: e => console.log(e)
        }
      )
    }
  }
}

