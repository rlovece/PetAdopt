import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Usuario } from './models/Models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private url: string = 'http://localhost:3000/usuario'
  private usuario?: Usuario;

  constructor(private http: HttpClient, private router: Router) { }

  get currentUser(): Usuario | undefined {
    if (!this.usuario) return undefined
    //structuredClone(this.user)
    return { ...this.usuario };
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }

  verificarUserAndPass(email: string, contrasenia: string) {

    this.getUsers().subscribe(usuario => {
      usuario.find(u => {
        if (u.contrasenia === contrasenia && u.email === email) {
          this.usuario = u;
          localStorage.setItem('token', u.id.toString())
          this.router.navigate(['/admin'])
        }
      });
    });

  }

  checkStatusAutenticacion(): Observable<boolean> {
    const token = localStorage.getItem('token')
    if (!token) {
      return of(false)
    }
    return this.http.get<Usuario>(`${this.url}/${token}`)
      .pipe(
        tap(u => this.usuario = u),
        map(u => !!u),
        catchError(err => of(false))
      )
  }

  logout() {
    this.usuario = undefined;
    localStorage.clear()
  }
}
