import { TestBed } from '@angular/core/testing';

import { ConsumptionsService } from './consumptions.service';

describe('ConsumptionsService', () => {
  let service: ConsumptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
