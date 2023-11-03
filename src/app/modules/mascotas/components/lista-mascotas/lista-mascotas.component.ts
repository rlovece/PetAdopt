import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/mascota.models';
import { MascotasService } from '../../services/mascotas.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent {

  mascotas: Mascota[] = [];

  constructor(
    private mascotasService: MascotasService,
  ){}

  OnInit(){
    this.mascotas = this.mascotasService.mascotas;
  }


}
