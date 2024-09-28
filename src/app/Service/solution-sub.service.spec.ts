import { TestBed } from '@angular/core/testing';

import { SolutionSubService } from './solution-sub.service';

describe('SolutionSubService', () => {
  let service: SolutionSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
