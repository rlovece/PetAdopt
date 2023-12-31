import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/core/services/api-auth.service';
import { Usuario } from 'src/app/core/models/Models/usuario';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {

  usuarioLogin: Usuario = new Usuario;
  @Output() opcionSeleccionada = new EventEmitter<string>();
  isScrolled = false;

  constructor(private authService: ApiAuthService, private router: Router){
    if (this.authService.currentUser){
      this.usuarioLogin = this.authService.currentUser;
      console.log(this.usuarioLogin);
    }
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  onLogOut(){
    this.authService.logout();
    this.router.navigate([''])
  }

  gestionMascotas() {
    this.opcionSeleccionada.emit('mascotas');
  }

  gestionSolicitudes() {
    this.opcionSeleccionada.emit('solicitudes');
  }

  gestionComentarios() {
    this.opcionSeleccionada.emit('comentarios');
  }

  gestionUsuarios() {
    this.opcionSeleccionada.emit('usuarios');
  }

  gestionAdoptantes() {
    this.opcionSeleccionada.emit('adoptantes');
  }

}
