import { Component, Input } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  @Input() inputComentario: Comentario = new Comentario;
}
