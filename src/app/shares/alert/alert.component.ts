import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() texto: string = '';
  @Output() EmitAceptar: EventEmitter<boolean> = new EventEmitter();

  aceptar() {
    this.EmitAceptar.emit(false);
  }
}
