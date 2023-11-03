import { Injectable, OnInit } from '@angular/core';
import { Observable, lastValueFrom, toArray } from 'rxjs';
import { ApiMascotasService } from 'src/app/core/api-mascotas.service';
import { Mascota } from 'src/app/core/models/mascota.models';

@Injectable({
  providedIn: 'root'
})
export class MascotasService implements OnInit {

  mascotas: Mascota[] = [];

  constructor(
    private apiMascotasService : ApiMascotasService
  ) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() : Observable<Mascota[]>{
    return this.apiMascotasService.getAll();
  }

}
