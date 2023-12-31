import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';

@Component({
  selector: 'app-gestion-mascotas',
  templateUrl: './gestion-mascotas.component.html',
  styleUrls: ['./gestion-mascotas.component.css']
})
export class GestionMascotasComponent {

  listaCompletaMascotas: Mascota[] = [];
  listaFiltradaMascotas: Mascota[] = [];
  opcionSeleccionada: string = 'bienvenida';
  mostrarPanelAddMascota: boolean = false;
  mostrarPanelEditMascota: boolean = false;
  mascotaSeleccionadaParaEdicion: Mascota | null = null;
  mostrarPanelViewMascota: boolean = false;
  mascotaSeleccionadaView: Mascota | null = null;

  mostrarAlert: boolean = false;
  msj: string = ''


  constructor(
    private mascotasService: MascotasService,
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.mascotasService.getAll()
    .subscribe(
      {
        next: data => {
          this.listaCompletaMascotas=data;
          this.listaFiltradaMascotas = this.listaCompletaMascotas.slice();
        },
        error: e => console.log(e)
      }
    )
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

  verElimidanos() {
    this.listaFiltradaMascotas =
    this.listaFiltradaMascotas.filter(m => m.estado == 'Eliminado');
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

  GuardarCambiosEdit() {
    this.mostrarPanelEditMascota = false;
  }

  deleteMascota(mascota: Mascota){
    if (mascota.id){
      this.mascotasService.delete(mascota.id)
      .subscribe(
        {
          next: () => {
            this.mostrarMsj (`${mascota.nombre} fue eliminada`);
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
  }

  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }
}
