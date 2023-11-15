import { TestBed } from '@angular/core/testing';

import { ApiAdoptantesService } from './api-adoptantes.service';

describe('ApiAdoptantesService', () => {
  let service: ApiAdoptantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAdoptantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
