import { Injectable } from '@angular/core';
import { ApiMascotasService } from 'src/app/core/api-mascotas.service';
import { Mascota } from 'src/app/core/models/mascota.models';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  mascotas: Mascota[] = [];



  constructor(
    private apiMascotasService : ApiMascotasService
  ) { }

  getAll(){
    this.apiMascotasService.getAll()
    .subscribe({
      next: data => this.mascotas = data,
      error: (e) => console.log(e)
    })
  }

}
