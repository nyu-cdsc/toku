import { TestBed, inject } from '@angular/core/testing';

import { ResponseService } from './response.service';
import { Response } from './response';

describe('ResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseService]
    });
  });

  it('should be created', inject([ResponseService], (service: ResponseService) => {
    expect(service).toBeTruthy();
  }));


  it('should have values', inject([ResponseService], (service: ResponseService) => {
    const response: Response = {
      id: 'one',
      age: 4,
      study: 3,
      condition: 'affirmation1',
      trial: 'porcupine',
      response: [3],
      attnTrial: 'one',
      attnResponse: 2,
    };

    service.setResponse(response);
    const result: Response = <Response>service.getResponse('one');

    expect(result instanceof (Response));
    expect(response.age).toBe(4);
  }));
});
