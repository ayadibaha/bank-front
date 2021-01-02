import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationBancaireComponent } from './operation-bancaire.component';

describe('OperationBancaireComponent', () => {
  let component: OperationBancaireComponent;
  let fixture: ComponentFixture<OperationBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
