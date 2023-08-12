import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCreateComponent } from './trips-store.component';

describe('TripsCreateComponent', () => {
  let component: TripsCreateComponent;
  let fixture: ComponentFixture<TripsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
