import { Component, Input } from '@angular/core';
import { Adoptante } from 'src/app/core/models/Models/adoptante';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent {

  @Input() inputAdoptante: Adoptante = new Adoptante();
  @Input() isAdmin: boolean = false;
  mostrarPanelSolicitar: boolean = false;

  mostrarAlert: boolean = false;
  msj: string = '';

  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }
}
