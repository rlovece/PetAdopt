import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Solicitud } from '../models/Models/solicitud';
import { Observable } from 'rxjs';
import { Adoptante } from '../models/Models/adoptante';

@Injectable({
  providedIn: 'root'
})
export class ApiSolicitudesService {

  baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }

  getAllSolicitudes(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${this.baseURL}/solicitudes`);
  }

  getSolicitudesPorEstado(estado: string): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${this.baseURL}/solicitudes?estado=${estado}`);
  }

  addSolictud(solicitud: Solicitud): Observable<Solicitud>{
    return this.http.post<Solicitud>(`${this.baseURL}/solicitudes`, solicitud);
  }


  getAdoptantes(): Observable<Adoptante[]> {
    return this.http.get<Adoptante[]>(`${this.baseURL}/adoptantes`);
  }

  getAdoptanteByDNI(dni: string): Observable<Adoptante>{
    return this.http.get<Adoptante>(`${this.baseURL}/adoptantes?dni=${dni}`);
  }

  addAdoptante(adoptante: Adoptante): Observable<Adoptante>{
    return this.http.post<Adoptante>(`${this.baseURL}/adoptantes`, adoptante);
  }

  update(id: number, solicitud: Partial<Solicitud>){
    return this.http.put<Solicitud>(`${this.baseURL}/solicitudes/${id}`, solicitud);
  }
}
