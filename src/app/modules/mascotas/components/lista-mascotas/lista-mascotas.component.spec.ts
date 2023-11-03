import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMascotasComponent } from './lista-mascotas.component';

describe('ListaMascotasComponent', () => {
  let component: ListaMascotasComponent;
  let fixture: ComponentFixture<ListaMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMascotasComponent]
    });
    fixture = TestBed.createComponent(ListaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
