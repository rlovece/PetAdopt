import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiSolicitudesService } from 'src/app/core/services/api-solicitudes.service';
import { Mascota } from 'src/app/core/models/Models/mascota';
import { Solicitud } from 'src/app/core/models/Models/solicitud';
import { MascotasService } from 'src/app/core/services/api-mascotas.service';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';


@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html'
})
export class EditSolicitudComponent {
  solicitudForm: FormGroup | undefined;
  usuarioLogin: Usuario = new Usuario;
  @Output() EmitEditSolicitud = new EventEmitter<Solicitud>();
  @Output() EmitEditMascota = new EventEmitter<Mascota>();
  @Input() solicitud: Solicitud | undefined;
  @Output() EmitMsj = new EventEmitter<string>();

  mascotaEdit: Mascota = new Mascota;

  constructor(
    private fb: FormBuilder,
    private solicitudesService: ApiSolicitudesService,
    private mascotaService: MascotasService,
    private authService: ApiAuthService
  ) {if (this.authService.currentUser){
    this.usuarioLogin = this.authService.currentUser;
  }
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
       this.mascotaService.getById(this.solicitud.idMascota)
      .subscribe({
        next: data => this.mascotaEdit = data,
        error: e => console.log(e)
       })
    }
  }

  getAdoptante(){
    if (this.solicitud){
      this.mascotaService.getById(this.solicitud.idMascota)
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
        const fecha = new Date();
        this.solicitud.fechaAdopcion = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`
        this.solicitud.estado = newSolicitud.estado;
        this.mascotaEdit.estado = 'Adoptado';
        this.solicitud.idAdmin = this.usuarioLogin.id;
        this.mascotaService.update(this.solicitud.idMascota, this.mascotaEdit)
        .subscribe(data => {
          console.log(data);
            if (this.solicitud != undefined && this.solicitud.id!= null) {
              this.solicitudesService.update(this.solicitud.id, this.solicitud)
              .subscribe(
                (data) => {
                  this.EmitEditSolicitud.emit(data);
                  this.EmitMsj.emit(`Solicitud ${data.id} fue editada!`);
                }
              );
            }
          })
      }
      if (this.solicitud.estado != 'Aprobada' && newSolicitud.estado == 'Rechazada'){
        this.solicitud.estado = newSolicitud.estado;
        this.solicitud.idAdmin = this.usuarioLogin.id;
        if (this.solicitud != undefined && this.solicitud.id!= null) {
          this.solicitudesService.update(this.solicitud.id, this.solicitud)
          .subscribe(
            (data) => {
              this.EmitEditSolicitud.emit(data);
              this.EmitMsj.emit(`Solicitud ${data.id} fue editada!`);
            }
          );
        }
      }
      if (this.solicitud.estado == 'Aprobada'){
        this.solicitud.idAdmin = this.usuarioLogin.id;
        this.solicitud.comentarios = newSolicitud.comentarios;
        if (this.solicitud != undefined && this.solicitud.id!= null) {
          this.solicitudesService.update(this.solicitud.id, this.solicitud)
          .subscribe(
            (data) => {
              this.EmitEditSolicitud.emit(data);
              this.EmitMsj.emit(`El comentario de la solicitud ${data.id} fue editado! El resto de los campos no pueden ser modificados!`);
            }
          );
        }
      }
    }else {
      this.EmitMsj.emit(`Todos los campos deben ser completados`);
    }
  }
}
