import { TestBed } from '@angular/core/testing';

import { ContratAccountService } from './contrat-account.service';

describe('ContratAccountService', () => {
  let service: ContratAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
