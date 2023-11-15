import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Usuario } from '../models/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/usuario`);
  }

  addUsuario(usuNuevo: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseURL}/usuario`, usuNuevo);
  }

  updateUsuario(id: number, usuario: Partial<Usuario>){
    return this.http.put<Usuario>(`${this.baseURL}/usuario/${id}`, usuario);
  }

  deleteUsuario(id: number){
    return this.http.delete<boolean>(`${this.baseURL}/usuario/${id}`);
  }
}
