import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Adoptante } from 'src/app/core/models/Models/adoptante';

@Component({
  selector: 'app-listados-adoptantes',
  templateUrl: './listados-adoptantes.component.html',
  styleUrls: ['./listados-adoptantes.component.css']
})
export class ListadosAdoptantesComponent {

  @Input() inputAdoptantes: Array<Adoptante> = [];
  @Output() adoptanteToEdit: EventEmitter<Adoptante> = new EventEmitter();
  @Output() adoptanteToDelete: EventEmitter<Adoptante> = new EventEmitter();
  @Output() adoptanteToView: EventEmitter<Adoptante> = new EventEmitter();
  vistaDetallaAdoptante = false;
  adoptanteEnVista: Adoptante = new Adoptante;

  msjDelet: boolean = false;
  adoptanteAEliminar: Adoptante = new Adoptante;

  constructor(){}

  editAdoptante(adoptante: Adoptante) {
    this.adoptanteToEdit.emit(adoptante);
  }

  deleteAdoptante (adoptante: Adoptante) {
    this.adoptanteToDelete.emit(adoptante);
    this.msjDelet = false;
  }

  mostrarMsjDelete(adoptante: Adoptante) {
    this.adoptanteAEliminar = adoptante;
    this.msjDelet = true;
  }

  cancelarDelete() {
    this.msjDelet = false;
  }

  cambiarEstadoVistaDetalle() {
    this.vistaDetallaAdoptante = !this.vistaDetallaAdoptante;
  }

  mostrarDetalleAdoptante(adoptante: Adoptante) {
    this.cambiarEstadoVistaDetalle();
    this.adoptanteToView.emit(adoptante);
  }

  contarFilas():number{
    var filas = document.querySelectorAll("#tablaListado tr");
    var totalFilas = filas.length-2;
    return totalFilas;
  }
}
