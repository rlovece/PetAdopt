import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from '../../../../core/services/mascotas.service';



@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent {

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
