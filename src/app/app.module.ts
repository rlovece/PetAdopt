import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
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
