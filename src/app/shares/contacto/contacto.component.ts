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

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required],Validators.pattern(this.emailPattern)],
    telefono:  ['', [Validators.required, Validators.minLength(6)]],
    mensaje:  ['', [Validators.required, Validators.minLength(6)]],
  })

  guardar() {
    console.log(this.formulario.value);
    this.router.navigate(['/home']);
  }

}
