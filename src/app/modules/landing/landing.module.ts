import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ListaAdopcionComponent } from './components/lista-adopcion/lista-adopcion.component';
import { MascotasModule } from '../mascotas/mascotas.module';
import { SharesModule } from 'src/app/shares/shares.module';
import { SeccionComentariosComponent } from './components/seccion-comentarios/seccion-comentarios.component';
import { ComentariosModule } from '../comentarios/comentarios.module';
import { ListaComentariosComponent } from './components/lista-comentarios/lista-comentarios.component';


@NgModule({
  declarations: [
    LandingComponent,
    ListaAdopcionComponent,
    SeccionComentariosComponent,
    ListaComentariosComponent
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
