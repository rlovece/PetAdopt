import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComentariosComponent } from './seccion-comentarios.component';

describe('SeccionComentariosComponent', () => {
  let component: SeccionComentariosComponent;
  let fixture: ComponentFixture<SeccionComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionComentariosComponent]
    });
    fixture = TestBed.createComponent(SeccionComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
