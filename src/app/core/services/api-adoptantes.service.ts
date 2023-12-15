import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Adoptante } from '../models/Models/adoptante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAdoptantesService {

  baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getAdoptantes(): Observable<Adoptante[]> {
    return this.http.get<Adoptante[]>(`${this.baseURL}/adoptantes`);
  }

  getAdoptanteByDNI(dni: string): Observable<Adoptante>{
    return this.http.get<Adoptante>(`${this.baseURL}/adoptantes?dni=${dni}`);
  }

  getAdoptanteById(id: number): Observable<Adoptante>{
    return this.http.get<Adoptante>(`${this.baseURL}/adoptantes/${id}`);
  }

  addAdoptante(adoptante: Adoptante): Observable<Adoptante>{
    return this.http.post<Adoptante>(`${this.baseURL}/adoptantes`, adoptante);
  }

  update(id: number, adoptante: Partial<Adoptante>){
    return this.http.put<Adoptante>(`${this.baseURL}/adoptantes/${id}`, adoptante);
  }
}
