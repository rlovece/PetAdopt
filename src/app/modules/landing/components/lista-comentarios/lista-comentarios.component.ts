import { Component, Input } from '@angular/core';
import { Comentario, ComentarioView } from 'src/app/core/models/Models/comentario';


@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent {
  @Input() inputComentarios: Array<ComentarioView> = [];
}
