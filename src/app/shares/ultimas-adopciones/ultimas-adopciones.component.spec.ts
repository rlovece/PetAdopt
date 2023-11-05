import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasAdopcionesComponent } from './ultimas-adopciones.component';

describe('UltimasAdopcionesComponent', () => {
  let component: UltimasAdopcionesComponent;
  let fixture: ComponentFixture<UltimasAdopcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimasAdopcionesComponent]
    });
    fixture = TestBed.createComponent(UltimasAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
