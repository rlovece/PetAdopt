import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiSolicitudesService } from 'src/app/core/api-solicitudes.service';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { Solicitud } from 'src/app/core/models/Models/solicitud';

@Component({
  selector: 'app-solicitar-adopcion',
  templateUrl: './solicitar-adopcion.component.html',
  styleUrls: ['./solicitar-adopcion.component.css']
})
export class SolicitarAdopcionComponent {

  constructor(private fb: FormBuilder, private solicitudService: ApiSolicitudesService) { }

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  solicitud: Solicitud = new Solicitud();
  adoptantes: Adoptante[] = [];
  fechaActual: string = '';
  nuevoAdoptante: Adoptante = new Adoptante();

  formulario: FormGroup = this.fb.group({
    dni:  ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    domicilio:  ['', [Validators.required, Validators.minLength(6)]],
    telefono:  ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required],Validators.pattern(this.emailPattern)],
  })

  getDNIAdoptante(dni :string): boolean {
    this.solicitudService.getAdoptantes().subscribe({
      next: (data) => {
        this.adoptantes = data;
        console.log(this.adoptantes);
        for(let a of this.adoptantes){
          console.log(a.dni);
          if(a.dni === dni){
            return true;
          }
        }
        return false;
      },
      error: (e) => console.error(e),
    });
    return false;
  }


  agregarSolicitud() {

    this.solicitud.idAnimal = 3;
    this.solicitud.estado = 'pendiente';
    this.solicitud.fecha = '20/30/2323';

      this.solicitudService.addSolictud(this.solicitud).subscribe({
        next: (data) => {
          alert('Solicitud enviada con éxito.');
        },
        error: (e) => console.error(e),
      });
  }




  addSolicitud() {
    if (this.formulario.invalid){
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    console.log((this.getDNIAdoptante(this.formulario.value.dni)));
    if(this.getDNIAdoptante(this.formulario.value.dni)){
      console.log('entro');
      this.agregarSolicitud();
    }else{
      this.solicitudService.addAdoptante(this.formulario.value).subscribe({
        next: (data) => {
          alert('Adoptante agregado con éxito.');
          this.solicitud.idAdoptante = data.id;
          this.agregarSolicitud();
        },
        error: (e) => console.error(e),
      });

  }
  }

}


