import { Component, OnInit} from '@angular/core';
import { ApiSolicitudesService } from 'src/app/core/api-solicitudes.service';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-ultimas-adopciones',
  templateUrl: './ultimas-adopciones.component.html',
  styleUrls: ['./ultimas-adopciones.component.css']
})
export class UltimasAdopcionesComponent implements OnInit{


  adopciones: Solicitud[] = [];
  mascota: Mascota = new Mascota();

  constructor(private solicitudesService: ApiSolicitudesService, private mascotasService: MascotasService) { }

  ngOnInit(){
    this.getSolicitudesPorEstado();
  }

  getSolicitudesPorEstado(){
    this.solicitudesService.getSolicitudesPorEstado('aprobada')
    .subscribe(
      {
        next: data => this.adopciones =data,
        error: e => console.log(e)
      }
    )
  }

  getNombreMascota(id: number): string {
    this.mascotasService.getById(id)
    .subscribe(
      {
        next: data => this.mascota =data,
        error: e => console.log(e)
      }
    )
    return this.mascota.nombre;
  }

}
