import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PanelAdministracionComponent } from './panel-administracion/panel-administracion.component';
import { ListadosMascotasComponent } from './listados-mascotas/listados-mascotas.component';


@NgModule({
  declarations: [
    PanelAdministracionComponent,
    ListadosMascotasComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
