import { TestBed, inject } from '@angular/core/testing';

import { RunnerService } from './runner.service';

describe('RunnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunnerService]
    });
  });

  it('should be created', inject([RunnerService], (service: RunnerService) => {
    expect(service).toBeTruthy();
  }));
});
