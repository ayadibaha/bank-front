import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperationBancaireComponent } from './list-operation-bancaire.component';

describe('ListOperationBancaireComponent', () => {
  let component: ListOperationBancaireComponent;
  let fixture: ComponentFixture<ListOperationBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOperationBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOperationBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
