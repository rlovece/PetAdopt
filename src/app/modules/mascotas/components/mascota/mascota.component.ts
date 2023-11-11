import { Component, Input } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

  @Input() inputMascota: Mascota = new Mascota();
  mostrarPanelSolicitar: boolean = false;

  solicitarMascota() {
    this.mostrarPanelSolicitar = !this.mostrarPanelSolicitar;
  }

}
