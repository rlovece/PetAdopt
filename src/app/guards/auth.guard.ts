import { CanActivateFn, Router } from '@angular/router';
import { ApiAuthService } from '../core/api-auth.service';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../core/models/Models/usuario';

function checkAuthStatus(): boolean | Observable<boolean>{
  const authService = inject(ApiAuthService);
  const  router = inject(Router);
  const usuario: Usuario | undefined = authService.currentUser

  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(!estaAutenticado) router.navigate(['/login'])
                      } )
                    )
}

export const AuthGuard = () => {
  return checkAuthStatus()
}
