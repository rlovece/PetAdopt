import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdoptantesComponent } from './edit-adoptantes.component';

describe('EditAdoptantesComponent', () => {
  let component: EditAdoptantesComponent;
  let fixture: ComponentFixture<EditAdoptantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAdoptantesComponent]
    });
    fixture = TestBed.createComponent(EditAdoptantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
