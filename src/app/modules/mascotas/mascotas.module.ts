import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenComponent } from './components/imagen/imagen.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas.component';


@NgModule({
  declarations: [
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MascotasModule { }
