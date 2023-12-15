import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/core/models/Models/comentario';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html'
})
export class AddComentarioComponent {
  comentarioForm: FormGroup;
  @Output() EmitAddComentario = new EventEmitter<Comentario>();
  @Output() EmitMsj = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private comentarioService: ApiComentariosService,
  ) {
    this.comentarioForm = this.fb.group({
      puntaje: ['⭐⭐⭐⭐⭐', Validators.required],
      comentario: ['', Validators.required],
      nombre: ['', Validators.required],
    });
  }

  addComentario() {
    if (this.comentarioForm.valid) {
      let newComentario: Comentario = this.comentarioForm.value;
      newComentario.fecha = new Date().toLocaleDateString()
      this.comentarioService.create(newComentario).subscribe(
        (data) => {
          this.EmitAddComentario.emit(data);
          if (data.puntaje == '⭐⭐⭐⭐⭐' || data.puntaje == '⭐⭐⭐⭐'){
            this.EmitMsj.emit(`Muchas gracias ${data.nombre}. Tu comentario nos llena de orgullo!`)
          } else {
            this.EmitMsj.emit(`Muchas gracias ${data.nombre}. Tu comentario nos ayuda a mejorar!`)
          }
        }
      );
    } else {
      this.EmitMsj.emit(`Para registrar un comentario debes completar todos los campos."`);
    }
  }

}
