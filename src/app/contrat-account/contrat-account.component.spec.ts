import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAccountComponent } from './contrat-account.component';

describe('ContratAccountComponent', () => {
  let component: ContratAccountComponent;
  let fixture: ComponentFixture<ContratAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
