import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { ApiAuthService } from 'src/app/core/api-auth.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {}

  public async autenticar(){

    const check = this.authService.autenticar(this.usuario.email, this.usuario.contrasenia);

    if(await check){
      if(this.usuario.admin){
        this.router.navigate(['/home']);
      }else{
      this.router.navigate(['/home']);
      }
    }
    else{
      alert("No existe el usuario");
    }
  }


}
