import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImagenComponent } from './components/imagen/imagen.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { ListaMascotasComponent } from './components/lista-mascotas/lista-mascotas.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';

@NgModule({
  declarations: [
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddMascotaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ImagenComponent,
    MascotaComponent,
    ListaMascotasComponent,
    AddMascotaComponent
  ]
})
export class MascotasModule { }
