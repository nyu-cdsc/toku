import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { StimuliService } from './components/stimuli/stimuli.service';
import { StimuliDirective } from './stimuli.directive'; // todo directives dir
import { Stimuli, Responsive } from './components/stimuli/stimuli';
import { ResponseService } from './services/response/response.service';
import { RunnerService } from './services/runner/runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(StimuliDirective) stimDirective: StimuliDirective;
  study: string;
  iterator: any;
  responseCache = [];
  done = false;
  curActionName: string; // TODO this is getting unwieldy again -- all these items are for responses, should be in generator
  condition: string;
  curBlockName: string;
  ended: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private responseService: ResponseService,
    private runner: RunnerService,
    private stim: StimuliService
  ) {
    const title = this.runner.getProjectName();
    responseService.getDBConnection(title);
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
    this.buildStimuli(this.ended.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    // TODO implement end of study logic here
    // note that the config can put what it wants the end of study Frame to be -- so this could just be running cleanup, etc.
  }

  nextAction(data) {
    const cur = this.iterator.next(data);
    if (cur.value === 'start') {
      return this.nextAction(data);
    }
    if (cur.done) {
      return this.studyEnded();
    }
    const action = cur.value;
    this.curActionName = action.id;
    this.curBlockName = this.runner.getBlockName(this.runner.list); // todo

    this.buildStimuli(action.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    // todo ^ this needs to be fixed, can't just call [0] anymore
    // todo ^ will be  once multiple stimuli/Frame/whatever is supported

  }

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(this.stim.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    const inst = <Stimuli | Stimuli & Responsive>componentRef.instance; // todo does this make a difference?
    inst.parameters = stimuli.parameters;

    const instR = <Responsive>inst; // gah
    if (instR) {
      // instR.responseEnabled = false;
      instR.responseEvent.subscribe(message => {
        this.responseCache.push(message);
        this.responseService.setResponse(this.buildResponse(message, this.study, this.curBlockName, this.curActionName));
        // todo ^ move this to generator, just pass cached messages along to it (already doing it anyway)
      });
    }

    inst.doneEvent.subscribe(data => {
      if (this.done) {
        window.location.reload();
      }
      // this.nextAction(data);
      const responses = this.responseCache;
      this.responseCache = [];
      this.nextAction(responses);
      // todo could query the service for every response that took place under the current action, less state in here
    });
  }

  // TODO use Message type? everywhere - in response, in services, in generator..
  buildResponse(message, study, block, action) {
    const response = this.responseService.newResponse();
    response.data.participant = Date.now();
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

    return response; // todo return Message?
  }

  //  const condition = this.study.conditions[Math.floor(Math.random() * this.study.conditions.length)];
}
