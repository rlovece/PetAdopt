import { Component, Input } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';

@Component({
  selector: 'app-listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.css']
})
export class ListadoComentariosComponent {

  @Input() inputComentarios: Array<Comentario> = [];

  contarFilas():number{
    var filas = document.querySelectorAll("#tablaListado tr");
    var totalFilas = filas.length-2;
    return totalFilas;
  }
}
