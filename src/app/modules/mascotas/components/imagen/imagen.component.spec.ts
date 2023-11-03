import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenComponent } from './imagen.component';

describe('ImagenComponent', () => {
  let component: ImagenComponent;
  let fixture: ComponentFixture<ImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenComponent]
    });
    fixture = TestBed.createComponent(ImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
