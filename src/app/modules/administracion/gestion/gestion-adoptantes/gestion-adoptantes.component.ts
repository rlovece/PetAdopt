import { Component, Input } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';

@Component({
  selector: 'app-gestion-adoptantes',
  templateUrl: './gestion-adoptantes.component.html',
  styleUrls: ['./gestion-adoptantes.component.css']
})
export class GestionAdoptantesComponent {

  adoptantes: Adoptante[] = [];
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelEditAdoptante: boolean = false;
  adoptanteSeleccionadoParaEdicion: Adoptante | null = null;
  mostrarPanelViewAdoptante: boolean = false;
  adoptanteSeleccionadoView: Adoptante | null = null;

  mostrarAlert: boolean = false;
  msj: string = '';

  constructor(
    private solicitudesService: ApiSolicitudesService,
    private adoptanteService : ApiAdoptantesService
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  ngOnInit(){
    this.getAllAdoptantes();
  }

  getAllAdoptantes(){
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

  deleteAdoptante(adoptante: Adoptante){
    if (adoptante.id){
      this.adoptanteService.delete(adoptante.id)
      .subscribe(
        {
          next: () => {
            this.mostrarMsj (`${adoptante.nombre} fue eliminada`);
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

