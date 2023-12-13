import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html'
})
export class EditarUsuariosComponent {


  @Output() EmitEditUsuario = new EventEmitter<Usuario>();
  @Input() usuario: Usuario | undefined;
  @Output() EmitMsj = new EventEmitter<string>();

  formulario: FormGroup | undefined;

  constructor(private fb: FormBuilder, private usuarioService : ApiUsuariosService){}

  ngOnInit(): void {
    this.crearFormulario();
  }
  crearFormulario(){
  if(this.usuario){
   this.formulario = this.fb.group({
          dni:  [this.usuario.dni, Validators.required],
          nombre: [this.usuario.nombre, Validators.required],
          apellido: [this.usuario.apellido, Validators.required],
          direccion:  [this.usuario.direccion, Validators.required],
          telefono:  [this.usuario.telefono, Validators.required],
          email: [this.usuario.email, Validators.required],
          contrasenia: [this.usuario.contrasenia, Validators.required],
       });
      }
    }

editarUsuario() {
  console.log(this.usuario);
  if (this.formulario && this.formulario.valid && this.usuario) {
    this.usuario.nombre = this.formulario.value.nombre;
    this.usuario.apellido = this.formulario.value.apellido;
    this.usuario.dni = this.formulario.value.dni;
    this.usuario.direccion = this.formulario.value.direccion;
    this.usuario.email = this.formulario.value.email;
    this.usuario.contrasenia= this.formulario.value.contrasenia;
    this.usuario.telefono = this.formulario.value.telefono;
        if (this.usuario.id != null) {
            this.usuarioService.updateUsuario(this.usuario.id, this.usuario).subscribe({
        next: (data) => {
          console.log(this.usuario);
          this.EmitEditUsuario.emit(data);
          this.EmitMsj.emit(`El usuario nro ${data.id} usuario fue editado`);
        },
        error: (e) => console.log(e),
      });
    } else {
      this.EmitMsj.emit(`Su 'Por favor, verifica los datos`);
    }
    }
}

}
