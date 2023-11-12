import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ListaAdopcionComponent } from './components/lista-adopcion/lista-adopcion.component';
import { MascotasModule } from '../mascotas/mascotas.module';
import { SharesModule } from 'src/app/shares/shares.module';


@NgModule({
  declarations: [
    LandingComponent,
    ListaAdopcionComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MascotasModule,
    SharesModule
  ],
  exports: [
    LandingComponent
  ]
})

export class LandingModule { }
