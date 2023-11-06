import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shares/footer/footer.component';
import { NavComponent } from './shares/nav/nav.component';
import { HeaderComponent } from './shares/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MascotasModule } from './modules/mascotas/mascotas.module';
import { HttpClientModule} from '@angular/common/http';
import { UltimasAdopcionesComponent } from './shares/ultimas-adopciones/ultimas-adopciones.component';
import { ContactoComponent } from './shares/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { LandingModule } from './modules/landing/landing.module';
import { SharesModule } from './shares/shares.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LandingModule,
    AuthModule,
    SharesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
