import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirBnbComponent } from './air-bnb.component';

describe('AirBnbComponent', () => {
  let component: AirBnbComponent;
  let fixture: ComponentFixture<AirBnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirBnbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirBnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
