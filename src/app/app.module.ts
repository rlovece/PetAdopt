import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shares/footer/footer.component';
import { NavComponent } from './shares/nav/nav.component';
import { HeaderComponent } from './shares/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MascotasModule } from './modules/mascotas/mascotas.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
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
