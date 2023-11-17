import { NgModule } from '@angular/core';
import { UltimasAdopcionesComponent } from './components/ultimas-adopciones/ultimas-adopciones.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ListaAdopcionComponent } from './components/lista-adopcion/lista-adopcion.component';
import { MascotasModule } from '../mascotas/mascotas.module';
import { SharesModule } from 'src/app/shares/shares.module';
import { SeccionComentariosComponent } from './components/seccion-comentarios/seccion-comentarios.component';
import { ComentariosModule } from '../comentarios/comentarios.module';
import { ListaComentariosComponent } from './components/lista-comentarios/lista-comentarios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LandingComponent,
    ListaAdopcionComponent,
    SeccionComentariosComponent,
    ListaComentariosComponent,
    UltimasAdopcionesComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MascotasModule,
    SharesModule,
    ComentariosModule
  ],
  exports: [
    LandingComponent
  ]
})

export class LandingModule { }
