import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/core/api-auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,private apiService: ApiAuthService, private router: Router) { }

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  formulario: FormGroup = this.fb.group({
    email: ['', [Validators.required],Validators.pattern(this.emailPattern)],
    contrasenia:  ['', [Validators.required, Validators.minLength(6)]],
  })

  iniciarSesion() {
    if (this.formulario.invalid) return;

    this.apiService.verificarUserAndPass(
      this.formulario.controls['email'].value,
      this.formulario.controls['contrasenia'].value)

  }



}
