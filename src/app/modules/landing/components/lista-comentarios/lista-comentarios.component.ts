import { Component } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent {
  listaComentarios: Comentario[] = [];


  constructor(
    private comentariosService: ApiComentariosService,
  ){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.comentariosService.getAll()
    .subscribe(
      {
        next: data => this.listaComentarios = data.slice(-5),
        error: e => console.log(e)
      }
    )
  }
}
