import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Adoptante } from 'src/app/core/models/Models/adoptante';

@Component({
  selector: 'app-listados-adoptantes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>listados-adoptantes works!</p>`,
  styleUrls: ['./listados-adoptantes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadosAdoptantesComponent {

  @Input() inputAdoptantes: Array<Adoptante> = [];
  @Output() adoptanteToEdit: EventEmitter<Adoptante> = new EventEmitter();
  @Output() adoptanteToDelete: EventEmitter<Adoptante> = new EventEmitter();
  @Output() adoptanteToView: EventEmitter<Adoptante> = new EventEmitter();
  vistaDetallaAdoptante = false;
  adoptanteEnVista: Adoptante = new Adoptante;

  constructor(){}

  editAdoptante(mascota: Adoptante) {
    this.adoptanteToEdit.emit(mascota);
  }

  deleteAdoptante (mascota: Adoptante) {
    this.adoptanteToDelete.emit(mascota);
  }

  cambiarEstadoVistaDetalle() {
    this.vistaDetallaAdoptante = !this.vistaDetallaAdoptante;
  }

  mostrarDetalleAdoptante(mascota: Adoptante) {
    this.cambiarEstadoVistaDetalle();
    this.adoptanteToView.emit(mascota);
  }

}
