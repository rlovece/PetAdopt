import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComentarioComponent } from './add-comentario/add-comentario.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddComentarioComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddComentarioComponent,
    ComentarioComponent
  ]
})
export class ComentariosModule { }
