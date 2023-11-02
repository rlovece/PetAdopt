import { TestBed } from '@angular/core/testing';

import { ApiSolicitudesService } from './api-solicitudes.service';

describe('ApiSolicitudesService', () => {
  let service: ApiSolicitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSolicitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
