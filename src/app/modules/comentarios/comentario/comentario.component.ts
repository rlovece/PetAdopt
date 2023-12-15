import { Component, Input } from '@angular/core';
import { ComentarioView } from 'src/app/core/models/Models/comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {

  @Input() inputComentario: ComentarioView = new ComentarioView;
}
