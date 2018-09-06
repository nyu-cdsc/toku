import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { StimuliService } from './components/stimuli/stimuli.service';
import { StimuliDirective } from './stimuli.directive'; // todo directives dir
import { Parameters, Stimuli } from './components/stimuli/stimuli';
// todo ^ can this be loaded via di?
import { ResponseService } from './services/response/response.service';
import { RunnerService } from './services/runner/runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new';
  @ViewChild(StimuliDirective) stimDirective: StimuliDirective;
  iterator: any;
  done: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private runner: RunnerService, responseService: ResponseService, private stim: StimuliService) {
    responseService.getDBConnection(this.runner.getProjectName());
    // todo this ^ should be done elsewhere - module?
    this.iterator = runner.cycle(); // also this line should be within runner - not needed here
  }

  ngOnInit() {
    this.nextAction(null);
  }

  // todo just done()?
  studyEnded() {
    // TODO implement end of study logic here
      // note that the config can put what it wants the end of study Frame to be -- so this could just be running cleanup, etc.
  }

  nextAction(data) {
    if(this.done) {
      this.studyEnded();
    }

    const cur = this.iterator.next(data);
    const s = cur.value;
    this.done = cur.done;

    // todo should data not be passed when it's null? should verify the generator behavior
    console.log(s);
    this.buildStimuli(s.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    // todo ^ this needs to be fixed, can't just call [0] anymore
  }

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(this.stim.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    // const inst = (<Stimuli>componentRef.instance);
    const inst = <Stimuli>componentRef.instance; // todo does this make a difference?
    // console.log(inst);
    inst.parameters = stimuli.parameters;
    console.log(inst);

    inst.doneEvent.subscribe(data => {
      this.nextAction(data);
    })
  }
}
