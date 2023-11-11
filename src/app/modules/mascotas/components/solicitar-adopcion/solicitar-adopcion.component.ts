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

  formulario: FormGroup = this.fb.group({
    dni:  ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    domicilio:  ['', [Validators.required, Validators.minLength(6)]],
    telefono:  ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required],Validators.pattern(this.emailPattern)],
  })

  addSolicitud() {
    if (this.formulario.invalid){
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if(this.verificarAdoptante(this.formulario.controls['dni'].value)){
      this.agregarSolicitud();
    }else{
      this.solicitudService.addAdoptante(this.formulario.value).subscribe({
        next: (data) => {
          alert('Adoptante agregado con éxito.');
          this.agregarSolicitud();
        },
        error: (e) => console.error(e),
      });

  }
  }
  agregarSolicitud() {

    this.solicitud.id = 3;
    this.solicitud.idAnimal = 3;
    this.solicitud.idAdoptante = 3;
    this.solicitud.estado = 'pendiente';
    this.solicitud.fecha = '';

      this.solicitudService.addSolictud(this.solicitud).subscribe({
        next: (data) => {
          alert('Solicitud enviada con éxito.');
        },
        error: (e) => console.error(e),
      });
  }

  getAllAdoptantes() {
    this.solicitudService.getAdoptantes().subscribe({
      next: (data) => {
        this.adoptantes = data;
      },
      error: (e) => console.error(e),
    });
  }

  verificarAdoptante(dni: string): boolean {

    
    if(this.adoptantes.filter((m) => m.dni === dni)){
      console.log(this.adoptantes);
      return true;
    }

    else{   return false;}
  }
}


