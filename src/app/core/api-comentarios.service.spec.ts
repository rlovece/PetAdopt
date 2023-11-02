import { TestBed } from '@angular/core/testing';

import { ApiComentariosService } from './api-comentarios.service';

describe('ApiComentariosService', () => {
  let service: ApiComentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiComentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
