import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImagenComponent } from './components/imagen/imagen.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddComponent
  ]
})
export class MascotasModule { }
