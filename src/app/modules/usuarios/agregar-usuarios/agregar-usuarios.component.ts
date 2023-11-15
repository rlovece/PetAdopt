import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/models/Models/usuario';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent {

  @Output() EmitAgregarUsuario = new EventEmitter<Usuario>();
  constructor(private fb: FormBuilder, private usuarioService: ApiUsuariosService){}

  formulario: FormGroup = this.fb.group({
    dni:  ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    direccion:  ['', [Validators.required, Validators.minLength(6)]],
    telefono:  ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    contrasenia: ['', [Validators.required, Validators.minLength(8)]],
  });

  agregarUsuario(){
    if (this.formulario.valid) {
      let nuevoUsuario: Usuario = this.formulario.value;
      this.usuarioService.addUsuario(nuevoUsuario).subscribe(
        (data) => {
          this.EmitAgregarUsuario.emit(data);
          alert(`${data.nombre} fue agregado al listado`);
        }
      );
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
}
