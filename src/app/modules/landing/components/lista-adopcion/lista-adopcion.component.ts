import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';

@Component({
  selector: 'app-lista-adopcion',
  templateUrl: './lista-adopcion.component.html',
  styleUrls: ['./lista-adopcion.component.css']
})
export class ListaAdopcionComponent {
  mascotasEnAdopcion: Mascota[] = [];
  mascotasEnAdopcionFiltrada: Mascota[] = [];

  constructor(
    private mascotasService: MascotasService,
  ){}

  ngOnInit(){
    this.getEnAdopcion();
  }

  getEnAdopcion(){
    this.mascotasService.getAll()
    .subscribe(
      {
        next: data => {
          this.mascotasEnAdopcion=data.filter(m => m.estado == 'En adopcion');
          this.mascotasEnAdopcionFiltrada = this.mascotasEnAdopcion.slice();
        },
        error: e => console.log(e)
      }
    )
  }

  verPerros(){
    this.mascotasEnAdopcionFiltrada =
    this.mascotasEnAdopcionFiltrada.filter(m => m.tipo == 'Perro');
  }

  verGatos(){
    this.mascotasEnAdopcionFiltrada =
    this.mascotasEnAdopcionFiltrada.filter(m => m.tipo == 'Gato');
  }

  quitarFiltros(){
    this.mascotasEnAdopcionFiltrada = this.mascotasEnAdopcion.slice();
  }

  verPequenios() {
    this.mascotasEnAdopcionFiltrada =
    this.mascotasEnAdopcionFiltrada.filter(m => m.tamanio == 'Pequeño');
  }

  verMedianos() {
    this.mascotasEnAdopcionFiltrada =
    this.mascotasEnAdopcionFiltrada.filter(m => m.tamanio == 'Mediano');
  }

  verGrandes() {
    this.mascotasEnAdopcionFiltrada =
    this.mascotasEnAdopcionFiltrada.filter(m => m.tamanio == 'Grande');
  }

}

