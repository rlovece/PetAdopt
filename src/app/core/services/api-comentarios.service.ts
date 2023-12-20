import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Comentario } from '../models/Models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ApiComentariosService {

  baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.baseURL}/comentarios`);
  }

  getByPuntaje(puntaje: string): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.baseURL}/comentarios?puntaje=${puntaje}`);
  }

  create(comentario: Comentario){
    return this.http.post<Comentario>(`${this.baseURL}/comentarios`, comentario);
  }

  delete(id: number){
    return this.http.delete<boolean>(`${this.baseURL}/comentarios/${id}`);
  }

  update(id: number, comentario: Partial<Comentario>){
    return this.http.put<Comentario>(`${this.baseURL}/comentarios/${id}`, comentario);
  }
}
