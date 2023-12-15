import { Component, Input } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

  @Input() inputMascota: Mascota = new Mascota();
  @Input() isAdmin: boolean = false;
  mostrarPanelSolicitar: boolean = false;

  mostrarAlert: boolean = false;
  msj: string = ''

  solicitarMascota() {
    this.mostrarMsj (`Le informamos que al completar la solicitud, sus datos su datos será almacenados en nuestra base de datos para futuros contactos. \n En caso de que luego quiera que lo eliminemos deberá contactarse con nosostros.`)
    this.mostrarPanelSolicitar = !this.mostrarPanelSolicitar;
  }

  cerrarSolicitarMascota() {
    this.mostrarPanelSolicitar = !this.mostrarPanelSolicitar;
  }

  addSolicitud(){
    this.mostrarPanelSolicitar = false;
  }

  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }

}
