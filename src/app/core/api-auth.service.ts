import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Models';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  baseURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios`);
  }

  getUserToAuth(email:string, contraseña: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios?email=${email}&contraseña=${contraseña}`);
  }
}