import { TestBed, inject } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { ResponseService } from './response.service';
import { Response } from './response';

describe('ResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseService, { provide: 'environment', useValue: environment }]
    });
  });

  it('should have responses', (done) => {
    const service = TestBed.get(ResponseService);
    const response = new Response();
    const res = service.setResponse(response);
    // r.then((res) => { console.log('RIGHT HERE!', res) ; expect(res.length).toBeGreaterThan(0); done(); });
    function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    sleep(1000).then(() => {
      const r = service.getResponses();
      r.then((rr) => {
        expect(rr.length).toBeGreaterThan(0);
        done();
      });
    });
  }, 30000);

  // it('should give csv', (done) => {
  // const service = TestBed.get(ResponseService);
  // service.getCSV();
  // });
});
