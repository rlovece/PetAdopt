import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';

@Component({
  selector: 'app-listados-mascotas',
  templateUrl: './listados-mascotas.component.html',
  styleUrls: ['./listados-mascotas.component.css']
})
export class ListadosMascotasComponent {

  @Input() inputMascotas: Array<Mascota> = [];
  @Output() mascotaToEdit: EventEmitter<Mascota> = new EventEmitter();
  @Output() mascotaToDelete: EventEmitter<Mascota> = new EventEmitter();
  @Output() mascotaToView: EventEmitter<Mascota> = new EventEmitter();
  vistaDetallaMascota = false;
  mascotaEnVista: Mascota = new Mascota;

  constructor(){}

  editMascota(mascota: Mascota) {
    this.mascotaToEdit.emit(mascota);
  }

  deleteMascota (mascota: Mascota) {
    this.mascotaToDelete.emit(mascota);
  }

  cambiarEstadoVistaDetalle() {
    this.vistaDetallaMascota = !this.vistaDetallaMascota;
  }

  mostrarDetalleMascota(mascota: Mascota) {
    this.cambiarEstadoVistaDetalle();
    this.mascotaToView.emit(mascota);
  }

}
