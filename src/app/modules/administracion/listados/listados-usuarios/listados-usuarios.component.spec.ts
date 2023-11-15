import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosUsuariosComponent } from './listados-usuarios.component';

describe('ListadosUsuariosComponent', () => {
  let component: ListadosUsuariosComponent;
  let fixture: ComponentFixture<ListadosUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadosUsuariosComponent]
    });
    fixture = TestBed.createComponent(ListadosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
