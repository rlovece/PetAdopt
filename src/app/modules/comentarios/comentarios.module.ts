import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComentarioComponent } from './add-comentario/add-comentario.component';
import { ComentarioComponent } from './comentario/comentario.component';




@NgModule({
  declarations: [
    AddComentarioComponent,
    ComentarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddComentarioComponent,
    ComentarioComponent
  ]
})
export class ComentariosModule { }
