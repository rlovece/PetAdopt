import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private fb: FormBuilder, private router: Router) { }


  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required]],
    telefono:  ['', [Validators.required, Validators.minLength(6)]],
    mensaje:  ['', [Validators.required, Validators.minLength(6)]],
  })

  guardar() {
    console.log(this.formulario.value);
    this.router.navigate(['/home']);
  }

}
