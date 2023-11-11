import { Component } from '@angular/core';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { MascotasService } from '../../../../core/services/mascotas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent {
  mascotaForm: FormGroup;

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
      const newMascota: Mascota = this.mascotaForm.value;
      this.mascotaService.create(newMascota).subscribe(
        (data) => {
          alert(`${data.nombre} fue agregado en estado "En Adopcion"`);
        }
      );
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
}
