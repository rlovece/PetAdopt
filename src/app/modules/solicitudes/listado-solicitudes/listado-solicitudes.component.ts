import { Component, Input } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent {

  @Input() inputSolicitudes: Array<Solicitud> = [];

  constructor (
    private mascotaService: MascotasService
  ){}

}
