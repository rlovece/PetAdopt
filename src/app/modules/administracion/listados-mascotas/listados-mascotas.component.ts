import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-listados-mascotas',
  templateUrl: './listados-mascotas.component.html',
  styleUrls: ['./listados-mascotas.component.css']
})
export class ListadosMascotasComponent {

  mascotasEnAdopcion: Mascota[] = [];


  constructor(
    private mascotasService: MascotasService,
  ){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.mascotasService.getAll()
    .subscribe(
      {
        next: data => this.mascotasEnAdopcion=data,
        error: e => console.log(e)
      }
    )
  }

}
