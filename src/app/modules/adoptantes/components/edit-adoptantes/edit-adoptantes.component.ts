import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';

@Component({
  selector: 'app-edit-adoptantes',
  templateUrl: './edit-adoptantes.component.html',
  styleUrls: ['./edit-adoptantes.component.css']
})
export class EditAdoptantesComponent {
  formulario: FormGroup | undefined;
  @Output() EmitEditAdoptante = new EventEmitter<Adoptante>();
  @Input() adoptante: Adoptante | undefined;
  @Output() EmitMsj = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private adoptanteService: ApiAdoptantesService,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if(this.adoptante){
      this.formulario = this.fb.group({
        nombre: [this.adoptante.nombre, Validators.required],
        apellido: [this.adoptante.apellido, Validators.required],
        dni: [this.adoptante.dni, Validators.required],
        domicilio: [this.adoptante.domicilio, Validators.required],
        telefono: [this.adoptante.telefono, Validators.required],
        email: [this.adoptante.email, Validators.required],
      });
    }
  }

  editAdoptante() {
    if (this.formulario && this.formulario.valid && this.adoptante) {
      let newAdoptante: Adoptante = this.formulario.value;
      this.adoptante.nombre = newAdoptante.nombre;
      this.adoptante.apellido = newAdoptante.apellido;
      this.adoptante.dni = newAdoptante.dni;
      this.adoptante.domicilio = newAdoptante.domicilio;
      this.adoptante.telefono = newAdoptante.telefono;
      this.adoptante.email = newAdoptante.email;
      if (this.adoptante.id != null) {
        this.adoptanteService.update(this.adoptante.id, this.adoptante).subscribe(
          (data) => {
            this.EmitEditAdoptante.emit(data);
            this.EmitMsj.emit(`${data.nombre} fue editado`);
          }
        );
      }
    }
  }

}
