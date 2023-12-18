import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  activeMenu = false;
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Verifica la posición del scroll y actualiza la variable isScrolled
    this.isScrolled = window.scrollY > 400; // Cambia 50 según sea necesario
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
