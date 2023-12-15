import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptanteComponent } from './adoptante.component';

describe('AdoptanteComponent', () => {
  let component: AdoptanteComponent;
  let fixture: ComponentFixture<AdoptanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptanteComponent]
    });
    fixture = TestBed.createComponent(AdoptanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
