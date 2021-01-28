import { TestBed } from '@angular/core/testing';

import { CompartirService } from './compartir.service';

describe('CompartirService', () => {
  let service: CompartirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
