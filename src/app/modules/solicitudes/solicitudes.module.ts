import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';



@NgModule({
  declarations: [
    ListadoSolicitudesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoSolicitudesComponent
  ]
})
export class SolicitudesModule { }
