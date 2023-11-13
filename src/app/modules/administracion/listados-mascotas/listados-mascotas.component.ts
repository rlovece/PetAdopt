import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/mascotas.service';

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

  constructor(
    private mascotaService: MascotasService
  ){}

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
    // if (mascota.id !== null) {
    //   this.mascotaService.getById(mascota.id)
    //   .subscribe({
    //     next: (data) => {
    //       this.mascotaEnVista = data;
    //     },
    //     error: (e) => console.log(e)
    //   });
    // }
  }

}
