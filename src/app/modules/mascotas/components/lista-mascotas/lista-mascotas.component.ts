import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from '../../../../core/services/mascotas.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit{

  mascotas: Mascota[] = [];


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
        next: data => this.mascotas=data,
        error: e => console.log(e)
      }
    )
  }


}
