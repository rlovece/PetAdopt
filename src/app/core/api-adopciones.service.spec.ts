import { TestBed } from '@angular/core/testing';

import { ApiAdopcionesService } from './api-adopciones.service';

describe('ApiAdopcionesService', () => {
  let service: ApiAdopcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAdopcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
