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
  participant = Date.now(); // todo
  cur = {
    condition: '',
    block: '',
    action: {} // todo
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private runner: RunnerService,
    private responseService: ResponseService
  ) {
    const title = runner.getProjectName();
    responseService.getDBConnection(title); // todo - do at module level?
    this.study = title;
    this.iterator = runner.cycle();
    const firstBlock = runner.getBlockName(runner.list); // todo ick api
    this.cur.condition = firstBlock;
    this.cur.block = firstBlock;
  }
  // TODO this could use better design. Project is the config file, and it has organized structure - not just a list
  // or at least, is a list with specific elements in it. it should serve these to us on request, or this should be
  // kept somewhere and simply passed into a runner and processed (rather than harcoded in runner), or be centralized
  // for a runner, or just serve itself..

  ngOnInit() {
    // begin iteration
    this.nextAction(null);
  }

  studyEnded() {
    console.log('studyEnded() has been called');
    this.done = true;
    this.cur.action = this.runner.getProject().ended;

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
    this.cur.block = cur.value.block;
    this.cur.action = cur.value.action;
    console.log('nextaction called, currentAction is: ', this.cur.action);
  }

  // TODO use Message type? everywhere - in response, in services, in generator..
  buildResponse(message, study, block, action) {
    const response = this.responseService.newResponse();
    response.data.participant = this.participant;
    response.data.response = message.value;
    response.data.study = study; // TODO should be unnecessary
    response.data.block = block;
    response.data.action = action;
    return response; // todo return Message?
  }

  resetGame() {
    window.location.reload();
  }

  frameResponse(message) {
    this.responseCache.push(message);
    this.responseService.setResponse(this.buildResponse(message, this.study, this.cur.block, this.cur.action['id']));
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

  getCSV() {
    return this.responseService.getCSV();
  }
}

