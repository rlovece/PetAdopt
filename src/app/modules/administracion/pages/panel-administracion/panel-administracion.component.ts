import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.css']
})
export class PanelAdministracionComponent {
  opcionSeleccionada: string = 'bienvenida';

  constructor(
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

}
