import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAdopcionComponent } from './solicitar-adopcion.component';

describe('SolicitarAdopcionComponent', () => {
  let component: SolicitarAdopcionComponent;
  let fixture: ComponentFixture<SolicitarAdopcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitarAdopcionComponent]
    });
    fixture = TestBed.createComponent(SolicitarAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
