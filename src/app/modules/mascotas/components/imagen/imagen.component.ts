import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {

  @Input() archivo: string  = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefecto = '../../../../../assets/images/hueso-removebg-preview.png';

  errorImg() {
    this.archivo = this.imgDefecto;
  }

  imgCargada(){
    this.loaded.emit(this.archivo);
  }
}
