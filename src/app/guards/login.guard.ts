import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiAuthService } from '../core/api-auth.service';
import { Observable, map, tap } from 'rxjs';

function checkAuthStatus(): boolean | Observable<boolean>{
  const authService = inject(ApiAuthService);
  const  router = inject(Router);
  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(estaAutenticado){
                          router.navigate(['/private'])

                        }
                      }),
                      map(estaAutenticado => !estaAutenticado)
                    )
}

export const LoginGuard = () => {
  return checkAuthStatus()
}
