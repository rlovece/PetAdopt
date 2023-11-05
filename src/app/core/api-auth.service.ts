import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './models/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  baseURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/usuario`);
  }

  getUserToAuth(email:string, contrasenia: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/usuario?email=${email}&contrasenia=${contrasenia}`);
  }
}
