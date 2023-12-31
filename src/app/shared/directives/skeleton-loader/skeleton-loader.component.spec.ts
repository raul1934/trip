import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectComponent } from './skeleton-loader.component';

describe('RectComponent', () => {
  let component: RectComponent;
  let fixture: ComponentFixture<RectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
