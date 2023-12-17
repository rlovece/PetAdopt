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



  @Input() idMascota: number=0;
  @Output() EmitAddSolicitud = new EventEmitter();
  @Output() EmitMsj = new EventEmitter<string>();

  solicitud: Solicitud = new Solicitud();
  adoptantes: Adoptante[] = [];
  msj: string = '';

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
    return this.adoptantes.filter((m) => m.dni === dni)[0];
  }


  agregarSolicitud(dni: string) {

    let new_Date: Date = new Date();
    this.solicitud.idMascota = this.idMascota;
    this.solicitud.estado = 'Pendiente';
    this.solicitud.fecha = new_Date.toLocaleDateString();
    this.solicitud.comentarios = '';
    this.solicitud.idAdmin= 0;
    this.solicitud.idAdoptante = this.getDNIAdoptante(dni).id;

      this.solicitudService.addSolictud(this.solicitud).subscribe({
        next: (data) => {
          this.EmitAddSolicitud.emit(data);
          this.EmitMsj.emit(`${this.msj} la solicitud enviada con éxito.`);
        },
        error: (e) => console.error(e),
      });
  }




  addSolicitud() {
    if (this.formulario.invalid){
      this.EmitMsj.emit(`Por favor, completa todos los campos obligatorios.`);
      return;
    }

    const adoptante = this.getDNIAdoptante(this.formulario.value.dni)

    if(adoptante && adoptante.id){
      adoptante.email = this.formulario.value.email;
      adoptante.telefono = this.formulario.value.telefono.toString();
      adoptante.domicilio = this.formulario.value.domicilio;
      this.adoptanteService.update(adoptante.id, adoptante).subscribe({
        next: (data) => {
          this.msj = `${data.nombre} ${data.apellido} sus datos han sido actualizados y `;
          this.agregarSolicitud(data.dni);
        },
        error: (e) => console.error(e),
      });
    }else{
      this.adoptanteService.addAdoptante(this.formulario.value).subscribe({
        next: (data) => {
          this.msj = `${data.nombre} ${data.apellido} sus datos han sido agregados y \n`;
          this.adoptantes.push(data);
          this.agregarSolicitud(data.dni);
        },
        error: (e) => console.error(e),
      });
    }
  }

}


