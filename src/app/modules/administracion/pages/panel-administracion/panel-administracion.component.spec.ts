import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdministracionComponent } from './panel-administracion.component';

describe('PanelAdministracionComponent', () => {
  let component: PanelAdministracionComponent;
  let fixture: ComponentFixture<PanelAdministracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAdministracionComponent]
    });
    fixture = TestBed.createComponent(PanelAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
