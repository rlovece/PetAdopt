import { Component } from '@angular/core';
import { Comentario, ComentarioView } from 'src/app/core/models/Models/comentario';
import { ApiAdoptantesService } from 'src/app/core/services/api-adoptantes.service';
import { ApiComentariosService } from 'src/app/core/services/api-comentarios.service';

@Component({
  selector: 'app-seccion-comentarios',
  templateUrl: './seccion-comentarios.component.html',
  styleUrls: ['./seccion-comentarios.component.css']
})
export class SeccionComentariosComponent {

  listaComentarios : Comentario[] = [];
  listaComentariosView: ComentarioView[] = [];
  mostrarPanelAddComentario: boolean = false;

  mostrarAlert: boolean = false;
  msj: string = '';

  constructor(
    private comentariosService: ApiComentariosService,
    private adoptantesService: ApiAdoptantesService
  ){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.comentariosService.getAll()
    .subscribe(
      {
        next: data => {
          this.listaComentarios = data.slice(-5);
          this.getComentariosView();
        },
        error: e => console.log(e)
      }
    )
  }

  getComentariosView(){
    this.listaComentarios.forEach(item => {
      const newComentarioView = new ComentarioView();
      newComentarioView.comentario = item.comentario;
      newComentarioView.fecha = item.fecha;
      newComentarioView.puntaje = item.puntaje;
      if (item.idAdoptante){
        this.adoptantesService.getAdoptanteById(item.idAdoptante).subscribe({
          next: data => {
            newComentarioView.nombreAdoptante = data.nombre;
            this.listaComentariosView.push(newComentarioView);
          },
          error: e => console.log(e)
        })
      }
    });
  }

  verPanelAddComentario() {
    this.mostrarMsj(`Sus datos su datos será almacenados para futuros contactos. \n Si quiere que los eliminemos comuniquese con nosostros.`)
    this.mostrarPanelAddComentario = !this.mostrarPanelAddComentario;
  }

  cerrarPanelAddComentario() {
    this.mostrarPanelAddComentario = !this.mostrarPanelAddComentario;
  }

  onAgregarComentario(newComentario : ComentarioView){
    this.mostrarPanelAddComentario = false;
    this.listaComentariosView.push(newComentario);
    this.listaComentariosView.shift();
  }

  mostrarMsj(event: string) {
    this.msj = event;
    this.mostrarAlert = true;
  }

  aceptarAlert() {
    this.mostrarAlert = false;
  }
}
