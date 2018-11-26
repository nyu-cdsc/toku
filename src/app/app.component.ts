import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { ResponseService } from './services/response/response.service';
import { RunnerService } from './services/runner/runner.service';

@Component({
  selector: 'toku-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  study: string;
  iterator: any;
  responseCache = [];
  done = false;
  condition: string;
  curBlockName: string;
  ended: any;
  participant = Date.now();
  responseService: ResponseService;
  // currentAction: Action
  currentAction: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private runner: RunnerService,
  ) {
    this.responseService = new ResponseService();
    const title = this.runner.getProjectName();
    this.responseService.getDBConnection(title);
    this.study = title;
    this.ended = this.runner.getProject().ended;
    // todo this ^ should be done elsewhere - module?
    this.iterator = runner.cycle();
    this.condition = this.runner.getBlockName(runner.list);
    this.curBlockName = this.runner.getBlockName(runner.list);
  }

  ngOnInit() {
    // begin iteration
    this.nextAction(null);
  }

  studyEnded() {
    console.log('studyEnded() has been called');
    this.done = true;
    this.currentAction = this.ended;


    // TODO implement end of study logic here
    // note that the config can put what it wants the end of study Frame to be -- so this could just be running cleanup, etc.
  }

  nextAction(data) {
    // todo put in assertions/logs when running in DEV mode
    const cur = this.iterator.next(data);
    if (cur.value === 'start') {
      return this.nextAction(data);
    }
    if (cur.done) {
      return this.studyEnded();
    }
    const action = cur.value;
    this.curBlockName = this.runner.getBlockName(this.runner.list); // todo
    this.currentAction = action;
    console.log('nextaction called, currentAction is: ', this.currentAction);
  }

  // TODO use Message type? everywhere - in response, in services, in generator..
  buildResponse(message, study, block, action) {
    const response = this.responseService.newResponse();
    response.data.participant = this.participant;
    response.data.response = [message.value];
    response.data.study = study; // TODO should be unnecessary
    response.data.block = block;
    response.data.trial = 1; // TODO fix
    response.data.action = action;

    // ^ trial doesn't matter, but think about it for later if they are doing multiple runs
    // this is perhaps another reason why responses would be handled best by the generator, as it has access to all this

    //   this.response.data.response = [value + 1]; // ngfor indexes by 0
    // this.response.data.response.push(value + 1);
    // TODO also accomodate for multiple response values in a single database row, like before?
    // ^ no longer going to do this. no.

    return response; // todo return Message?
  }

  resetGame() {
    window.location.reload();
  }
  //  const condition = this.study.conditions[Math.floor(Math.random() * this.study.conditions.length)];

  frameResponse(message) {
    this.responseCache.push(message);
    this.responseService.setResponse(this.buildResponse(message, this.study, this.curBlockName, this.currentAction.id));
    // todo ^ move this to generator, just pass cached messages along to it (already doing it anyway)
  }

  frameDone(data) {
    if (this.done) {
      this.resetGame();
    }
    const responses = this.responseCache;
    this.responseCache = [];
    this.nextAction(responses);
    // todo could query the service for every response that took place under the current action, less state in here
  }
}

