import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/mascota.models';
import { MascotasService } from '../../services/mascotas.service';



@Component({
  selector: 'app-addMascota',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  newMascota: Mascota = new Mascota();

  constructor(
    private mascotaService: MascotasService,
  ){  }

  addMascota() {
    this.mascotaService.create(this.newMascota)
    .subscribe(
      (data) => {
        alert (`${data.nombre} fue agregado en estado "En Adopcion"`);
      }
    )
  }
}
