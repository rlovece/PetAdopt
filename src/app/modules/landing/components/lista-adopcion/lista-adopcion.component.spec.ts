import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdopcionComponent } from './lista-adopcion.component';

describe('ListaAdopcionComponent', () => {
  let component: ListaAdopcionComponent;
  let fixture: ComponentFixture<ListaAdopcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAdopcionComponent]
    });
    fixture = TestBed.createComponent(ListaAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
