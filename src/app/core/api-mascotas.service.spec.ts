import { TestBed } from '@angular/core/testing';

import { ApiMascotasService } from './api-mascotas.service';

describe('ApiMascotasService', () => {
  let service: ApiMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
