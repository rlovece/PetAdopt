import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ApiSolicitudesService } from 'src/app/core/api-solicitudes.service';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/mascotas.service';


@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html',
  styleUrls: ['./edit-solicitud.component.css']
})
export class EditSolicitudComponent {
  solicitudForm: FormGroup | undefined;
  @Output() EmitEditSolicitud = new EventEmitter<Solicitud>();
  @Output() EmitEditMascota = new EventEmitter<Mascota>();
  @Input() solicitud: Solicitud | undefined;

  mascotaEdit: Mascota = new Mascota;

  constructor(
    private fb: FormBuilder,
    private solicitudesService: ApiSolicitudesService,
    private mascotaService: MascotasService
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.getMascota();
  }

  initForm() {
    if(this.solicitud){
      this.solicitudForm = this.fb.group({
        estado: [this.solicitud.estado, Validators.required],
        foto: [this.solicitud.foto, Validators.required],
        comentarios: [this.solicitud.comentarios, Validators.required],
      });
    }
  }

   getMascota(){
     if (this.solicitud){
       this.mascotaService.getById(this.solicitud.idAnimal)
      .subscribe({
        next: data => this.mascotaEdit = data,
        error: e => console.log(e)
       })
    }
  }

  editSolicitud() {
    if (this.solicitudForm && this.solicitudForm.valid && this.solicitud) {
      let newSolicitud: Solicitud = this.solicitudForm.value;
      this.solicitud.foto = newSolicitud.foto;
      this.solicitud.comentarios = newSolicitud.comentarios;
      if (this.solicitud.estado != 'Aprobada' && newSolicitud.estado == 'Aprobada'){
        this.solicitud.fechaAdopcion = new Date().toLocaleString();
        this.solicitud.estado = newSolicitud.estado;
        this.mascotaEdit.estado = 'Adoptado';
        this.mascotaService.update(this.solicitud.idAnimal, this.mascotaEdit)
        .subscribe(data => {
          console.log(data);
            if (this.solicitud != undefined && this.solicitud.id!= null) {
              this.solicitudesService.update(this.solicitud.id, this.solicitud)
              .subscribe(
                (data) => {
                  this.EmitEditSolicitud.emit(data);
                  alert(`${data.id} fue editado!`);
                }
              );
            }
          })
      }
    }
  }
}
