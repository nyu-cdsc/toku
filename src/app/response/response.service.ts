import { Injectable } from '@angular/core';
import { Response } from './response';

@Injectable()
export class ResponseService {
  responses: Response[];

  constructor() { }

  // returns either response from id or list of all responses
  getResponse(id) {
    if(id == null){
      return this.responses;
    }

    // TODO - not ready for prod, invalid
    if(this.responses.length > 0){
      return this.responses[0];
    }
  }

  setResponse(response: Response) {
    this.responses.push(response);
  }

}
