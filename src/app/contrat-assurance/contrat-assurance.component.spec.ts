import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAssuranceComponent } from './contrat-assurance.component';

describe('ContratAssuranceComponent', () => {
  let component: ContratAssuranceComponent;
  let fixture: ComponentFixture<ContratAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
