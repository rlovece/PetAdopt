import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { Adoptante } from 'src/app/core/models/Models/adoptante';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';

@Component({
  selector: 'app-solicitar-adopcion',
  templateUrl: './solicitar-adopcion.component.html',
  styleUrls: ['./solicitar-adopcion.component.css']
})
export class SolicitarAdopcionComponent {

  constructor(private fb: FormBuilder, private solicitudService: ApiSolicitudesService, private adoptanteService : ApiAdoptantesService) { }



  @Input() idAnimal: number=0;
  @Output() EmitAddSolicitud = new EventEmitter();


  solicitud: Solicitud = new Solicitud();
  adoptantes: Adoptante[] = [];

  formulario: FormGroup = this.fb.group({
    dni:  ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    domicilio:  ['', [Validators.required, Validators.minLength(6)]],
    telefono:  ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
  });

  ngOnInit() {
    this.getAdoptantes();
  }

  //agregar get ADOPCION O BORRAR ESE MODELO

  getAdoptantes() {
    this.adoptanteService.getAdoptantes().subscribe({
      next: (data) => {
        this.adoptantes = data;
      },
      error: (e) => console.log(e),
    });
  }

  getDNIAdoptante(dni: string): Adoptante {
    console.log(this.adoptantes);
    return this.adoptantes.filter((m) => m.dni === dni)[0];
  }


  agregarSolicitud(dni: string) {

    let new_Date: Date = new Date();
    this.solicitud.idAnimal = this.idAnimal;
    this.solicitud.estado = 'Pendiente';
    this.solicitud.fecha = new_Date.toLocaleString();
    this.solicitud.idAdoptante = this.getDNIAdoptante(dni).id;

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

    if(this.getDNIAdoptante(this.formulario.value.dni)){
      console.log('entro');
      this.agregarSolicitud(this.formulario.value.dni);
    }else{
      this.adoptanteService.addAdoptante(this.formulario.value).subscribe({
        next: (data) => {
          alert('Adoptante agregado con éxito.');
          this.agregarSolicitud(this.formulario.value.dni);
          this.EmitAddSolicitud.emit(data);
        },
        error: (e) => console.error(e),
      });
  }

  }

}


