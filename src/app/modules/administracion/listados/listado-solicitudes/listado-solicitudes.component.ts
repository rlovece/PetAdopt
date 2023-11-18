import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent {

  @Input() inputSolicitudes: Array<Solicitud> = [];
  @Input() inputMascotas: Array<Mascota> = [];
  @Input() paraAdoptante: boolean = false;
  @Output() solicitudToEdit: EventEmitter<Solicitud> = new EventEmitter();
  @Output() solicitudToDelete: EventEmitter<Solicitud> = new EventEmitter();
  @Output() solicitudToView: EventEmitter<Solicitud> = new EventEmitter();

  vistaDetallaSol = false;
  mascotaEnVista: Mascota = new Mascota;

  vistaDetalleSolicitud: boolean = false;

  constructor(){}

  getNombreMascota(id: number): string {
    return this.inputMascotas.filter((m) => m.id == id)[0]?.nombre;
  }

  editSolicitud (solicitud: Solicitud) {
    this.solicitudToEdit.emit(solicitud);
  }

  deleteSolicitud (solicitud: Solicitud) {
    this.solicitudToDelete.emit(solicitud);
  }

  mostrarDetalleSolicitud(solicitud: Solicitud) {
    this.cambiarEstadoVistaDetalle();
    this.solicitudToView.emit(solicitud);
  }

  cambiarEstadoVistaDetalle() {
    this.vistaDetalleSolicitud = !this.vistaDetalleSolicitud;
  }


}
