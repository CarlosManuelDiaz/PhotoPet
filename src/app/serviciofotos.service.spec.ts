import { TestBed } from '@angular/core/testing';

import { ServiciofotosService } from './serviciofotos.service';

describe('ServiciofotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciofotosService = TestBed.get(ServiciofotosService);
    expect(service).toBeTruthy();
  });
});
