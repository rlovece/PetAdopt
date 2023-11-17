import { Component } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-gestion-comentarios',
  templateUrl: './gestion-comentarios.component.html',
  styleUrls: ['./gestion-comentarios.component.css']
})
export class GestionComentariosComponent {
  listaCompletaComentario: Comentario[] = [];
  listaFiltradaComentario: Comentario[] = [];
  opcionSeleccionada: string = 'bienvenida';

  constructor(
    private comentarioService: ApiComentariosService,
  ){}

  actualizarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.comentarioService.getAll()
    .subscribe(
      {
        next: data => {
          this.listaCompletaComentario=data;
          this.listaFiltradaComentario = this.listaCompletaComentario.slice();
        },
        error: e => console.log(e)
      }
    )
  }


  ver1(){
    this.listaFiltradaComentario =
    this.listaCompletaComentario.filter(c => c.puntaje == '⭐');
  }

  ver2(){
    this.listaFiltradaComentario =
    this.listaCompletaComentario.filter(c => c.puntaje == '⭐⭐');
  }

  ver3(){
    this.listaFiltradaComentario =
    this.listaCompletaComentario.filter(c => c.puntaje == '⭐⭐⭐');
  }

  ver4(){
    this.listaFiltradaComentario =
    this.listaCompletaComentario.filter(c => c.puntaje == '⭐⭐⭐⭐');
  }

  ver5(){
    this.listaFiltradaComentario =
    this.listaCompletaComentario.filter(c => c.puntaje == '⭐⭐⭐⭐⭐');
  }

  quitarFiltros(){
    this.listaFiltradaComentario = this.listaCompletaComentario.slice();
  }
}
