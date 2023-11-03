import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/core/Models';
import { ApiAuthService } from 'src/app/core/api-auth.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiAuthService) { }

  public async autenticar(email:string, contraseña: string): Promise<boolean>{

    let usuario: Usuario[] = [];

    try{

      let apiResponse =  this.apiService.getUserToAuth(email,contraseña);

      usuario = await lastValueFrom(apiResponse);
    }catch(error){
      console.log(error);
    }

    return usuario.length == 1;
  }
}
