import { Component, Input } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  usuarios: Usuario[] = [];
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelAddMascota: boolean = false;
  mostrarPanelEditMascota: boolean = false;
  usuarioAeditar: Usuario | null = null;

  constructor( private usuarioService: ApiUsuariosService ){}

  @Input() inputUsuarios: Usuario = new Usuario();
  mostrarPanelAgregar: boolean = false;

  agregarUsuario() {
    this.mostrarPanelAgregar = !this.mostrarPanelAgregar;
  }

  addUsuario(){
    this.mostrarPanelAgregar = false;
  }

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



  verUsuarios(){
    this.usuarios ;
  }

  editarUsuario(usu: Usuario){
    this.usuarioAeditar = usu;
  }

}

