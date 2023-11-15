import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,private apiService: ApiAuthService, private router: Router) { }

  formulario: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    contrasenia:  ['', [Validators.required, Validators.minLength(6)]],
  })

  iniciarSesion() {
    if (this.formulario.invalid) return;

    this.apiService.verificarUserAndPass(
      this.formulario.controls['email'].value,
      this.formulario.controls['contrasenia'].value)

  }

  volverHome() {
    this.router.navigate(['/']);
  }



}
