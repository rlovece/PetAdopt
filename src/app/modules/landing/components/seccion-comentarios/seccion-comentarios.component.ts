import { Component } from '@angular/core';
import { Comentario } from 'src/app/core/models/Models/comentario';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-seccion-comentarios',
  templateUrl: './seccion-comentarios.component.html',
  styleUrls: ['./seccion-comentarios.component.css']
})
export class SeccionComentariosComponent {

  listaComentarios : Comentario[] = [];
  mostrarPanelAddComentario: boolean = false;


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

  verPanelAddComentario() {
    this.mostrarPanelAddComentario = !this.mostrarPanelAddComentario;
  }

  onAgregarMascota(newComentario : Comentario){
    this.mostrarPanelAddComentario = false;
    this.listaComentarios.push(newComentario);
    this.listaComentarios.shift();
  }
}
