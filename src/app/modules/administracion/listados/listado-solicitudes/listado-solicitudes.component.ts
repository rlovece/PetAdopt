import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent {

  @Input() inputSolicitudes: Array<Solicitud> = [];
  @Input() inputMascotas: Array<Mascota> = [];
  @Input() inputAdoptantes: Array<Adoptante> = [];
  @Input() inputUsuarios: Array<Usuario> = [];
  @Input() paraAdoptante: boolean = false;
  @Output() solicitudToEdit: EventEmitter<Solicitud> = new EventEmitter();
  @Output() solicitudToDelete: EventEmitter<Solicitud> = new EventEmitter();
  @Output() solicitudToView: EventEmitter<Solicitud> = new EventEmitter();

  vistaDetallaSol = false;
  mascotaEnVista: Mascota = new Mascota;

  vistaDetalleSolicitud: boolean = false;

  msjDelet: boolean = false;
  solicitudAEliminar: Solicitud = new Solicitud;

  constructor(){}

  getNombreMascota(id: number): string {
    return this.inputMascotas.filter((m) => m.id == id)[0]?.nombre;
  }

  getTipoMascota(id: number): string {
    return this.inputMascotas.filter((m) => m.id == id)[0]?.tipo;
  }

  getNombreAdoptante(id: number): string {
    const nombre= this.inputAdoptantes.filter((m) => m.id == id)[0]?.nombre + ' ' + this.inputAdoptantes.filter((m) => m.id == id)[0]?.apellido;
    return nombre;
  }

  getNombreUsuario(id: number): string {
    if(id == 0){
      return ' ';
    }else{
      const nombre= this.inputUsuarios.filter((m) => m.id == id)[0]?.nombre + ' ' + this.inputUsuarios.filter((m) => m.id == id)[0]?.apellido;
      return nombre;
    }

  }

  getDniAdoptante(id: number): string {
    return this.inputAdoptantes.filter((m) => m.id == id)[0]?.dni;
  }

  editSolicitud (solicitud: Solicitud) {
    this.solicitudToEdit.emit(solicitud);
  }

  deleteSolicitud (solicitud: Solicitud) {
    this.solicitudToDelete.emit(solicitud);
    this.msjDelet = false;
  }

  mostrarMsjDelete(solicitud: Solicitud) {
    this.solicitudAEliminar = solicitud;
    this.msjDelet = true;
  }

  cancelarDelete() {
    this.msjDelet = false;
  }

  mostrarDetalleSolicitud(solicitud: Solicitud) {
    this.cambiarEstadoVistaDetalle();
    this.solicitudToView.emit(solicitud);
  }

  cambiarEstadoVistaDetalle() {
    this.vistaDetalleSolicitud = !this.vistaDetalleSolicitud;
  }


  contarFilas():number{
    var filas = document.querySelectorAll("#tablaListado tr");
    var totalFilas = filas.length-2;
    return totalFilas;
  }




}
