import { Component } from '@angular/core';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.css']
})
export class GestionSolicitudesComponent {

  listaCompletaSolicitudes: Solicitud[] = [];
  listaMascotas: Mascota[] = [];
  listaAdoptantes: Adoptante[] = [];
  listaFiltradaSolicitudes: Solicitud[] = [];

  mostrarPanelViewSolicitud: boolean = false;

  mascotaEnSolicitud: Mascota = new Mascota;
  adoptanteEnSolicitud: Adoptante = new Adoptante;
  mostrarPanelEditSolicitud: boolean = false;
  solicitudSeleccionada: any;

  constructor(
    private solicitudesService: ApiSolicitudesService,
    private mascotasService: MascotasService
  ){}

  ngOnInit(){
    this.getAllSolicitudes();
    this.getAllMascotas();
    this.getAllAdoptantes();
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
    this.solicitudesService.getAdoptantes()
    .subscribe(
      {
        next: data => {
          this.listaAdoptantes = data;
        },
        error: e => console.log(e)
      }
    )
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
      this.listaMascotas.filter(m => m.id == solicitud.idAnimal)[0];
    this.adoptanteEnSolicitud=
      this.listaAdoptantes.filter(a => a.id == solicitud.idAdoptante)[0];
    this.listaFiltradaSolicitudes = this.listaCompletaSolicitudes.filter(s => s.idAdoptante == solicitud.idAdoptante);
    this.mostrarPanelViewSolicitud = true;
    this.solicitudSeleccionada = solicitud;
  }



  /*


  onAgregarMascota(newMascota : Mascota){
    this.mostrarPanelAddMascota = false;
    this.listaCompletaMascotas.push(newMascota);
    this.listaFiltradaMascotas.push(newMascota);
  }

  verPerros(){
    this.listaFiltradaMascotas =
    this.listaFiltradaMascotas.filter(m => m.tipo == 'Perro');
  }


  verGatos(){
    this.listaFiltradaMascotas =
    this.listaFiltradaMascotas.filter(m => m.tipo == 'Gato');
  }

  verAdopcion(){
    this.listaFiltradaMascotas =
    this.listaFiltradaMascotas.filter(m => m.estado == 'En adopcion');
  }

  quitarFiltros(){
    this.listaFiltradaMascotas = this.listaCompletaMascotas.slice();
  }

  verPanelEditMascota() {
    this.mostrarPanelEditMascota = !this.mostrarPanelEditMascota;
  }



  deleteMascota(mascota: Mascota){
    if (mascota.id){
      this.mascotasService.delete(mascota.id)
      .subscribe(
        {
          next: () => {
            alert(`${mascota.nombre} fue eliminada`)
            this.listaCompletaMascotas= this.listaCompletaMascotas.filter(m => m.id != mascota.id);
            this.listaFiltradaMascotas = this.listaCompletaMascotas.slice();
          },
          error: e => console.log(e)
        }
      )
    }
  }

  verPanelViewMascota() {
    this.mostrarPanelViewMascota = !this.mostrarPanelViewMascota;
  }

  verMascota(mascota: Mascota){
    this.mostrarPanelViewMascota = true;
    this.mascotaSeleccionadaView = mascota;
  }*/
}
