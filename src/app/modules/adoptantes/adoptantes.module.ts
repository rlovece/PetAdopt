import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharesModule } from 'src/app/shares/shares.module';
import { AdoptanteComponent } from './components/adoptante/adoptante.component';
import { EditAdoptantesComponent } from './components/edit-adoptantes/edit-adoptantes.component';

@NgModule({
  declarations: [
    AdoptanteComponent,
    EditAdoptantesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharesModule
  ],
  exports: [
    AdoptanteComponent,
    EditAdoptantesComponent
  ]
})
export class AdoptantesModule { }
