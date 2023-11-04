import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MascotasModule } from '../mascotas/mascotas.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MascotasModule
  ]
})
export class UsuariosModule { }
