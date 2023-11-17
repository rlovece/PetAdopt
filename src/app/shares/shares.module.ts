import { NgModule } from '@angular/core';
import { FooterComponent } from '../modules/landing/components/footer/footer.component';
import { HeaderComponent } from '../modules/landing/components/header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ]
})

export class SharesModule { }
