import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMascotasComponent } from './gestion-mascotas.component';

describe('GestionMascotasComponent', () => {
  let component: GestionMascotasComponent;
  let fixture: ComponentFixture<GestionMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMascotasComponent]
    });
    fixture = TestBed.createComponent(GestionMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
