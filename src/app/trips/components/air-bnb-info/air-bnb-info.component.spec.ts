import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirBnbInfoComponent } from './air-bnb-info.component';

describe('AirBnbInfoComponent', () => {
  let component: AirBnbInfoComponent;
  let fixture: ComponentFixture<AirBnbInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirBnbInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirBnbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
