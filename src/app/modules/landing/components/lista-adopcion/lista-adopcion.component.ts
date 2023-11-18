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
        next: data => this.mascotasEnAdopcion=data.filter(m => m.estado == 'En adopcion'),
        error: e => console.log(e)
      }
    )
  }

}

