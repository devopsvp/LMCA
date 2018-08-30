import { TestBed, inject } from '@angular/core/testing';

import { EquityAnalysisService } from './equity-analysis.service';

describe('EquityAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquityAnalysisService]
    });
  });

  it('should be created', inject([EquityAnalysisService], (service: EquityAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
