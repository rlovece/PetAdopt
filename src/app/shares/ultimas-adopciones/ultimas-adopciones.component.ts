import { Component, OnInit} from '@angular/core';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
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
  mascotas: Mascota[] = [];
  adoptantes: Adoptante[] = [];

  constructor(private solicitudesService: ApiSolicitudesService, private mascotasService: MascotasService) { }

  ngOnInit() {
    this.getSolicitudesPorEstado();
  }

  //agregar get ADOPCION O BORRAR ESE MODELO

  getSolicitudesPorEstado() {
    this.solicitudesService.getSolicitudesPorEstado('aprobada').subscribe({
      next: (data) => {
        this.adopciones = data;
        this.getAllMascotas();
        this.getAllAdoptantes();
      },
      error: (e) => console.log(e),
    });
  }

  getAllMascotas() {
    this.mascotasService.getAll().subscribe({
      next: (data) => {
        this.mascotas = data;
      },
      error: (e) => console.error(e),
    });
  }

  getNombreMascota(id: number): string {
    return this.mascotas.filter((m) => m.id === id)[0].nombre;
  }

  getAllAdoptantes() {
    this.solicitudesService.getAdoptantes().subscribe({
      next: (data) => {
        this.adoptantes = data;
      },
      error: (e) => console.error(e),
    });
  }

  getNombreAdoptante(id: number): string {
    return this.adoptantes.filter((m) => m.id === id)[0].nombre;
  }

}
