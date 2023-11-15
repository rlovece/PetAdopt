import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSolicitudesComponent } from './gestion-solicitudes.component';

describe('GestionSolicitudesComponent', () => {
  let component: GestionSolicitudesComponent;
  let fixture: ComponentFixture<GestionSolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionSolicitudesComponent]
    });
    fixture = TestBed.createComponent(GestionSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
