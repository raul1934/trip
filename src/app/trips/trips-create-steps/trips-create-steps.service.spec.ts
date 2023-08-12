import { TestBed } from '@angular/core/testing';

import { TripsCreateStepsService } from './trips-create-steps.service';

describe('TripsCreateStepsService', () => {
  let service: TripsCreateStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsCreateStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
