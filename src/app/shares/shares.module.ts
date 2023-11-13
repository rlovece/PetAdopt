import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { UltimasAdopcionesComponent } from './ultimas-adopciones/ultimas-adopciones.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule,
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
