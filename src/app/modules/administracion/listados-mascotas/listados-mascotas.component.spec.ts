import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosMascotasComponent } from './listados-mascotas.component';

describe('ListadosMascotasComponent', () => {
  let component: ListadosMascotasComponent;
  let fixture: ComponentFixture<ListadosMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadosMascotasComponent]
    });
    fixture = TestBed.createComponent(ListadosMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
