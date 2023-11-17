import { Component, Input } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';

@Component({
  selector: 'app-listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.css']
})
export class ListadoComentariosComponent {

  @Input() inputComentarios: Array<Comentario> = [];
}
