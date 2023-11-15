import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Solicitud } from '../models/Models/solicitud';
import { Observable } from 'rxjs';

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

  update(id: number, solicitud: Partial<Solicitud>){
    return this.http.put<Solicitud>(`${this.baseURL}/solicitudes/${id}`, solicitud);
  }
}
