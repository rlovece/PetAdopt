import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';

@Component({
  selector: 'app-edit-mascota',
  templateUrl: './edit-mascota.component.html'
})
export class EditMascotaComponent {
  mascotaForm: FormGroup | undefined;
  @Output() EmitEditMascota = new EventEmitter<Mascota>();
  @Input() mascota: Mascota | undefined;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotasService,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if(this.mascota){
      this.mascotaForm = this.fb.group({
        nombre: [this.mascota.nombre, Validators.required],
        foto: [this.mascota.foto, Validators.required],
        tamanio: [this.mascota.tamanio, Validators.required],
        estado: [this.mascota.estado, Validators.required],
        caracteristicas: [this.mascota.caracteristicas, Validators.required],
      });
    }
  }

  editMascota() {
    if (this.mascotaForm && this.mascotaForm.valid && this.mascota) {
      let newMascota: Mascota = this.mascotaForm.value;
      this.mascota.nombre = newMascota.nombre;
      this.mascota.estado = newMascota.estado;
      this.mascota.tamanio = newMascota.tamanio;
      this.mascota.caracteristicas = newMascota.caracteristicas;
      if (this.mascota.id != null) {
        this.mascotaService.update(this.mascota.id, this.mascota).subscribe(
          (data) => {
            this.EmitEditMascota.emit(data);
            alert(`${data.nombre} fue editado`);
          }
        );
      }
    }
  }
}

