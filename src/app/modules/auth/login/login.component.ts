import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/Models/Models';
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

   usuario : Usuario [] = [];


  iniciarSesion(){
    if(this.formulario.invalid)return;

    this.apiService.getUserToAuth(
      this.formulario.controls['email'].value,
      this.formulario.controls['contrasenia'].value).subscribe(
        {
          next: data => this.usuario=data,
          error: e => console.log(e)
        }
      )

      if(this.usuario.length == 1){
       /* localStorage.setItem('token', this.usuario[0].id.toString()) */
        this.router.navigate(['/landing']);
      }else{
        alert('Usuario o contraseña incorrectos');
      }
  }



}
