import { Component } from '@angular/core';
import { ApiSolicitudesService } from 'src/app/core/api-solicitudes.service';
import { Solicitud } from 'src/app/core/models/Models/solicitud';

@Component({
  selector: 'app-gestion-solicitudes',
  templateUrl: './gestion-solicitudes.component.html',
  styleUrls: ['./gestion-solicitudes.component.css']
})
export class GestionSolicitudesComponent {

  listaCompletaSolicitudes: Solicitud[] = [];
  listaFiltradaSolicitudes: Solicitud[] = [];

  constructor(
    private solicitudesService: ApiSolicitudesService
  ){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
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
  /*
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelAddMascota: boolean = false;
  mostrarPanelEditMascota: boolean = false;
  mascotaSeleccionadaParaEdicion: Mascota | null = null;
  mostrarPanelViewMascota: boolean = false;
  mascotaSeleccionadaView: Mascota | null = null;

  constructor(
    private mascotasService: MascotasService,
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }



  verPanelAddMascota() {
    this.mostrarPanelAddMascota = !this.mostrarPanelAddMascota;
  }

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

  editMascota(mascota: Mascota){
    this.mostrarPanelEditMascota = true;
    this.mascotaSeleccionadaParaEdicion = mascota;
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
