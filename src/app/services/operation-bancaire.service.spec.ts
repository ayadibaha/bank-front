import { TestBed } from '@angular/core/testing';

import { OperationBancaireService } from './operation-bancaire.service';

describe('OperationBancaireService', () => {
  let service: OperationBancaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationBancaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
