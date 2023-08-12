import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCreateStepsComponent } from './trips-create-steps.component';

describe('TripsCreateStepsComponent', () => {
  let component: TripsCreateStepsComponent;
  let fixture: ComponentFixture<TripsCreateStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsCreateStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsCreateStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
