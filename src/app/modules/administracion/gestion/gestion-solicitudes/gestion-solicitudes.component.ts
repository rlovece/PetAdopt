import { Component } from '@angular/core';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.css']
})
export class GestionSolicitudesComponent {

  listaCompletaSolicitudes: Solicitud[] = [];
  listaMascotas: Mascota[] = [];
  listaAdoptantes: Adoptante[] = [];
  listaUsuarios: Usuario[] = [];
  listaFiltradaSolicitudes: Solicitud[] = [];


  mostrarPanelViewSolicitud: boolean = false;
  mostrarPanelEditSolicitud: boolean = false;

  mascotaEnSolicitud: Mascota = new Mascota;
  adoptanteEnSolicitud: Adoptante = new Adoptante;
  solicitudSeleccionada: Solicitud = new Solicitud;

  mostrarAlert: boolean = false;
  msj: string = '';

  constructor(
    private solicitudesService: ApiSolicitudesService,
    private mascotasService: MascotasService,
    private adoptanteService : ApiAdoptantesService,
    private usuariosService: ApiUsuariosService
  ){}

  ngOnInit(){
    this.getAllSolicitudes();
    this.getAllMascotas();
    this.getAllAdoptantes();
    this.getAllUsuarios();
  }

  getAllSolicitudes(){
    this.solicitudesService.getAllSolicitudes()
    .subscribe(
      {
        next: data => {
          this.listaCompletaSolicitudes=data;
          this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.slice();
        },
        error: e => console.log(e)
      }
    )
  }

  getAllMascotas(){
    this.mascotasService.getAll()
    .subscribe(
      {
        next: data => {
          this.listaMascotas=data;
        },
        error: e => console.log(e)
      }
    )
  }

  getAllAdoptantes(){
    this.adoptanteService.getAdoptantes()
    .subscribe(
      {
        next: data => {
          this.listaAdoptantes = data;
        },
        error: e => console.log(e)
      }
    )
  }

  getAllUsuarios(){
    this.usuariosService.getAllUsuarios()
    .subscribe(
      {
        next: data => {
          this.listaUsuarios=data;
        },
        error: e => console.log(e)
      }
    )
  }

  verPendientes(){
    this.listaFiltradaSolicitudes =
    this.listaCompletaSolicitudes.filter(s => s.estado == 'Pendiente');
  }


  verAprobadas(){
    this.listaFiltradaSolicitudes =
    this.listaCompletaSolicitudes.filter(s => s.estado == 'Aprobada');
  }

  verRechazadas(){
    this.listaFiltradaSolicitudes =
    this.listaCompletaSolicitudes.filter(s => s.estado == 'Rechazada');
  }

  quitarFiltros(){
    this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.slice();
  }

  verPanelEditSolicitud(){
    this.mostrarPanelEditSolicitud = !this.mostrarPanelEditSolicitud;
  }

  editSolicitud(solicitud: Solicitud){
    this.mostrarPanelEditSolicitud = true;
    this.solicitudSeleccionada = solicitud;
  }

  verDetalleSolicitud(){
    this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.slice();
    this.mostrarPanelViewSolicitud = !this.mostrarPanelViewSolicitud;
  }


  verSolicitud(solicitud: Solicitud){
    this.mascotaEnSolicitud =
      this.listaMascotas.filter(m => m.id == solicitud.idMascota)[0];
    this.adoptanteEnSolicitud=
      this.listaAdoptantes.filter(a => a.id == solicitud.idAdoptante)[0];
    this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.filter(s => s.idAdoptante == solicitud.idAdoptante);
    this.mostrarPanelViewSolicitud = true;
    this.solicitudSeleccionada = solicitud;
  }

  deleteSolicitud(solicitud: Solicitud){
    if (solicitud.id){
      this.solicitudesService.delete(solicitud.id)
      .subscribe(
        {
          next: () => {
            this.mostrarMsj (`${solicitud.id} fue eliminada`);
            this.listaCompletaSolicitudes= this.listaCompletaSolicitudes.filter(m => m.id != solicitud.id);
            this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.slice();
          },
          error: e => console.log(e)
        }
      )
    }
  }

  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }
}
