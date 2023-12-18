import { NgModule } from '@angular/core';
import { FooterComponent } from '../modules/landing/components/footer/footer.component';
import { HeaderComponent } from '../modules/landing/components/header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent,
    AlertComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    NavComponent,
    AlertComponent
  ]
})

export class SharesModule { }
