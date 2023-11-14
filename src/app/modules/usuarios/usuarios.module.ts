import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';


@NgModule({
  declarations: [
    AgregarUsuariosComponent,
    EditarUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsuariosModule { }
