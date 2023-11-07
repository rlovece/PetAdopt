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


  formulario: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    contrasenia:  ['', [Validators.required, Validators.minLength(6)]],
  })

  iniciarSesion() {
    if (this.formulario.invalid) return;

    this.apiService.verificarUserAndPass(
      this.formulario.controls['user'].value,
      this.formulario.controls['password'].value)

  }



}
