import { Component, Input } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';
import { Comentario } from 'src/app/core/models/Models/comentario';

@Component({
  selector: 'app-gestion-adoptantes',
  templateUrl: './gestion-adoptantes.component.html',
  styleUrls: ['./gestion-adoptantes.component.css']
})
export class GestionAdoptantesComponent {

  adoptantes: Adoptante[] = [];
  comentarios: Comentario[] = [];
  comentariosFiltrados: Comentario[] = [];
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelEditAdoptante: boolean = false;
  adoptanteSeleccionadoParaEdicion: Adoptante | null = null;
  mostrarPanelViewAdoptante: boolean = false;
  adoptanteSeleccionadoView: Adoptante | null = null;

  mostrarAlert: boolean = false;
  msj: string = '';

  constructor(
    private comentariosService: ApiComentariosService,
    private adoptanteService : ApiAdoptantesService
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  ngOnInit(){
    this.getAllAdoptantes();
    this.getAllComentarios();
  }

  getAllAdoptantes(){
    this.comentariosService.getAll()
    .subscribe(
      {
        next: data => {
          this.comentarios = data;
        },
        error: e => console.log(e)
      }
    )
  }

  getAllComentarios(){
    this.adoptanteService.getAdoptantes()
    .subscribe(
      {
        next: data => {
          this.adoptantes = data;
        },
        error: e => console.log(e)
      }
    )
  }

  editAdoptante(adoptante: Adoptante){
    this.mostrarPanelEditAdoptante = true;
    this.adoptanteSeleccionadoParaEdicion = adoptante;
  }

  GuardarCambiosEdit() {
    this.mostrarPanelEditAdoptante = false;
  }

  verPanelEditAdoptante() {
    this.mostrarPanelEditAdoptante = !this.mostrarPanelEditAdoptante;
  }

  deleteComentario(idAdop: number){
    this.comentariosFiltrados =  this.comentarios.filter(c => c.idAdoptante == idAdop);
    for (let i = 0; i < this.comentariosFiltrados.length; i++) {
      this.comentariosFiltrados[i].idAdoptante = 1;
      const idComentario= this.comentariosFiltrados[i].id;
      this.comentariosService.update(idComentario, this.comentariosFiltrados[i])
      .subscribe(
        {
          next: () => {
            this.mostrarMsj (`${this.msj} y sus comentarios modificados`);
            this.comentarios= this.comentarios.filter(c => c.id != this.comentariosFiltrados[i].id);
          },
          error: e => console.log(e)
        }
      )
    }
  }

  deleteAdoptante(adoptante: Adoptante){
    if (adoptante.id){
      this.adoptanteService.delete(adoptante.id)
      .subscribe(
        {
          next: () => {
            this.msj = `${adoptante.nombre} fue eliminado`;
            this.deleteComentario(adoptante.id);
            this.adoptantes= this.adoptantes.filter(m => m.id != adoptante.id);
          },
          error: e => console.log(e)
        }
      )
    }
  }

  verAdoptante(adoptante: Adoptante){
    this.mostrarPanelViewAdoptante = true;
    this.adoptanteSeleccionadoView = adoptante;
  }

  verPanelViewAdoptante() {
    this.mostrarPanelViewAdoptante = !this.mostrarPanelViewAdoptante;
  }


  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }

}

