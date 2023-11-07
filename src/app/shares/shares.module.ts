import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { UltimasAdopcionesComponent } from './ultimas-adopciones/ultimas-adopciones.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    UltimasAdopcionesComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    UltimasAdopcionesComponent
  ]
})

export class SharesModule { }
