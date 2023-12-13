import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from '../../../../core/services/api-mascotas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html'
})
export class AddMascotaComponent {
  mascotaForm: FormGroup;
  @Output() EmitAddMascota = new EventEmitter<Mascota>();
  @Output() EmitMsj = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotasService,
  ) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      sexo: ['', Validators.required],
      foto: ['', Validators.required],
      tamanio: ['', Validators.required],
      nacimiento: [null, Validators.required],
      caracteristicas: [''],
    });
  }

  addMascota() {
    if (this.mascotaForm.valid) {
      let newMascota: Mascota = this.mascotaForm.value;
      newMascota.estado = "En adopcion";
      this.mascotaService.create(newMascota).subscribe(
        (data) => {
          this.EmitAddMascota.emit(data);
          this.EmitMsj.emit(`${data.nombre} fue agregado en estado "En Adopcion"`);
        }
      );
    } else {
      this.EmitMsj.emit(`Por favor, completa todos los campos obligatorios.`);
    }
  }
}
