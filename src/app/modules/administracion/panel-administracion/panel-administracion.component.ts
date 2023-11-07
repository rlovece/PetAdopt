import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/mascotas.service';

@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.css']
})
export class PanelAdministracionComponent {

  listaCompletaMascotas: Mascota[] = [];
  listaFiltradaMascotas: Mascota[] = [];


  constructor(
    private mascotasService: MascotasService,
  ){}

  ngOnInit(){
    this.getAll();
    this.listaFiltradaMascotas = this.listaCompletaMascotas;
  }

  getAll(){
    this.mascotasService.getAll()
    .subscribe(
      {
        next: data => this.listaCompletaMascotas=data,
        error: e => console.log(e)
      }
    )
  }

}