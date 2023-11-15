import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LandingModule } from './modules/landing/landing.module';
import { SharesModule } from './shares/shares.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdministracionModule } from './modules/administracion/administracion.module';
import { AppRoutingModule } from './app-routing.module';
import { ComentariosModule } from './modules/comentarios/comentarios.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LandingModule,
    AuthModule,
    SharesModule,
    AdministracionModule,
    ComentariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
