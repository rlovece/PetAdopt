import { Component, Input } from '@angular/core';
import { ApiUsuariosService } from 'src/app/core/services/api-usuarios.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {

  @Input() inputAdoptantes: Array<Usuario> = [];






}

