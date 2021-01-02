import { TestBed } from '@angular/core/testing';

import { ContratAssuranceService } from './contrat-assurance.service';

describe('ContratAssuranceService', () => {
  let service: ContratAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
