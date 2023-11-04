import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from 'src/app/core/models/mascota.models';
import { MascotasService } from '../../services/mascotas.service';

@Component({
  selector: 'app-addMascota',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public newMascota: Mascota = new Mascota();

  constructor(
    private mascotaService: MascotasService
  ){

  }
  addMascota() {

  }

}
