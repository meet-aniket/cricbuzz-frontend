import { TestBed } from '@angular/core/testing';

import { AllSeriesService } from './all-series.service';

describe('AllSeriesService', () => {
  let service: AllSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
