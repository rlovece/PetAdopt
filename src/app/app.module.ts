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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    UltimasAdopcionesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MascotasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
