import { TestBed } from '@angular/core/testing';

import { AutenticathionService } from './autenticathion.service';

describe('AutenticathionService', () => {
  let service: AutenticathionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticathionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
