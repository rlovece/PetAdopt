import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUsuariosComponent } from './panel-usuarios.component';

describe('PanelUsuariosComponent', () => {
  let component: PanelUsuariosComponent;
  let fixture: ComponentFixture<PanelUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelUsuariosComponent]
    });
    fixture = TestBed.createComponent(PanelUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
