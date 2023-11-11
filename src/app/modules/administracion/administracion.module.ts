import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PanelAdministracionComponent } from './pages/panel-administracion/panel-administracion.component';
import { ListadosMascotasComponent } from './listados-mascotas/listados-mascotas.component';
import { MascotasModule } from '../mascotas/mascotas.module';
import { NavAdminComponent } from './nav-admin/nav-admin.component';


@NgModule({
  declarations: [
    PanelAdministracionComponent,
    ListadosMascotasComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MascotasModule
  ],
  exports: [
    ListadosMascotasComponent,
  ]
})
export class AdministracionModule { }
