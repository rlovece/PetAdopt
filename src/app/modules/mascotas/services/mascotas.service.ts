import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/core/models/mascota.models';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})

export class MascotasService {

  baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.baseURL}/mascotas`);
  }

  getById(id: number): Observable<Mascota>{
    return this.http.get<Mascota>(`${this.baseURL}/mascotas/${id}`);
  }

  getByTipo(tipo: string): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.baseURL}/mascotas?tipo=${tipo}`);
  }

  getByEstado(estado: string): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.baseURL}/mascotas?estado=${estado}`);
  }

  getByTamanio(tamanio: string): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.baseURL}/mascotas?tamanio=${tamanio}`);
  }

  getByEdad(edad: string): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.baseURL}/mascotas?edad=${edad}`);
  }

  create(mascota: Mascota){
    return this.http.post<Mascota>(this.baseURL, mascota);
  }

  update(id: number, mascota: Partial<Mascota>){
    return this.http.put<Mascota>(`${this.baseURL}/${id}`, mascota);
  }

  delete(id: number){
    return this.http.delete<boolean>(`${this.baseURL}/${id}`);
  }

}
