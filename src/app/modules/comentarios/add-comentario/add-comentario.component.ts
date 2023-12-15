import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import {
  Comentario,
  ComentarioView,
} from 'src/app/core/models/Models/comentario';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
})
export class AddComentarioComponent {
  comentarioForm: FormGroup;
  @Output() EmitAddComentario = new EventEmitter<ComentarioView>();
  @Output() EmitMsj = new EventEmitter<string>();
  adoptantes: Adoptante[] = [];
  msj: string = '';

  constructor(
    private fb: FormBuilder,
    private comentarioService: ApiComentariosService,
    private adoptanteService: ApiAdoptantesService
  ) {
    this.comentarioForm = this.fb.group({
      puntaje: ['⭐⭐⭐⭐⭐', Validators.required],
      comentario: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
    });
  }

  ngOnInit() {
    this.getAdoptantes();
  }

  getAdoptantes() {
    this.adoptanteService.getAdoptantes().subscribe({
      next: (data) => {
        this.adoptantes = data;
      },
      error: (e) => console.log(e),
    });
  }

  getDNIAdoptante(dni: string): Adoptante {
    return this.adoptantes.filter((m) => m.dni === dni)[0];
  }

  addAll() {
    if (this.comentarioForm.valid) {
      const adoptante = this.getDNIAdoptante(this.comentarioForm.value.dni);
      if (adoptante && adoptante.id) {
        this.updateAdoptante(adoptante)
      } else {
        this.addAdoptante();
      }
    } else {
      this.EmitMsj.emit(
        `Para registrar un comentario debes completar todos los campos."`
      );
    }
  }

  updateAdoptante(adoptante: Adoptante) {
    adoptante.email = this.comentarioForm.value.email;
    if (adoptante.id) {
      this.adoptanteService.update(adoptante.id, adoptante).subscribe({
        next: (data) => {
          this.msj = `${data.nombre} ${data.apellido} tus datos han sido actualizados.`;
          if (data.id) {
            this.addComentario(data.id);
          }
        },
        error: (e) => console.error(e),
      });
    }
  }

  addAdoptante() {
    const newAdoptante = new Adoptante();
    newAdoptante.dni = this.comentarioForm.value.dni;
    newAdoptante.nombre = this.comentarioForm.value.nombre;
    newAdoptante.apellido = this.comentarioForm.value.apellido;
    newAdoptante.email = this.comentarioForm.value.email;
    this.adoptanteService.addAdoptante(newAdoptante).subscribe({
      next: (data) => {
        this.msj = `${data.nombre} ${data.apellido} tus datos fueron guardados.`;
        if (data.id) {
          this.addComentario(data.id);
        }
      },
      error: (e) => console.error(e),
    });
  }

  createComentarioView(data: Comentario) {
    let newComentarioView: ComentarioView = new ComentarioView();
    newComentarioView.comentario = this.comentarioForm.value.comentario;
    newComentarioView.puntaje = this.comentarioForm.value.puntaje;
    newComentarioView.nombreAdoptante = this.comentarioForm.value.nombre;
    newComentarioView.fecha = new Date().toLocaleDateString();
    this.EmitAddComentario.emit(newComentarioView);
    if (data.puntaje == '⭐⭐⭐⭐⭐' || data.puntaje == '⭐⭐⭐⭐') {
      this.EmitMsj.emit(`${this.msj}. Tu comentario nos llena de orgullo!`);
    } else {
      this.EmitMsj.emit(`${this.msj}. Tu comentario nos ayuda a mejorar!`);
    }
  }

  addComentario(id: number) {
    if (this.comentarioForm.valid) {
      let newComentario: Comentario = new Comentario();
      newComentario.comentario = this.comentarioForm.value.comentario;
      newComentario.puntaje = this.comentarioForm.value.puntaje;
      newComentario.idAdoptante = id;
      newComentario.fecha = new Date().toLocaleDateString();
      this.comentarioService.create(newComentario).subscribe((data) => {
        this.createComentarioView(data);
      });
    }
  }
}
