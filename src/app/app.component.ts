import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

// import { buildStimuli, stimuliComponentResolver } from './stimuli/stimuli.service';
import { StimuliService } from './stimuli/stimuli.service';
import { StimloaderDirective } from './stimloader.directive';
import { Parameters, Stimuli } from './stimuli/stimuli';
// todo ^ can this be loaded via di?
import { ResponseService } from './response/response.service';
import { RunnerService } from './runner/runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new';
  config: any[];
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;
  iterator: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private runner: RunnerService, responseService: ResponseService, private stim: StimuliService) {
    this.config = runner.genFromRandom(); // todo isn't there a shorthand for this?
    responseService.getDBConnection(this.runner.getProjectName());
    // todo setting config above now unnecessary
    this.iterator = runner.iterate(this.config); // also this line should be within runner - not needed here
  }

  ngOnInit() {
    // this.testCall();
    // this.runThrough();
    this.nextItem(); // todo this is wrong, rewrite - see what runThrough did? or just think
  }

  // TODO rename to next() or requestNextFrame(), etc
  nextItem() {
    // todo check for done=true
    const s = this.iterator.next().value;
    console.log(s);
    this.buildStimuli(s.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  testCall() {
    const s = this.config[0].stimuli[0];
    // buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);

    this.buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(this.stim.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    const inst = (<Stimuli>componentRef.instance);
    // console.log(inst);
    inst.parameters = stimuli.parameters;
    console.log(inst);

    inst.finishedEvent.subscribe(data => {
      this.nextItem();
    })
    // (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
  }


  // todo make new component that just contains Frame?

  // todo handle sequences of events, where modified Choice/Response obj is passed from frame to frame (if Control{sequence: true})
  // to enable groups/sequences. each sets their choice, which removes that option for the one that follows

  // ALSO - do this INSTEAD of a conditional component? it could be a block-level control() that makes choice in generator for next frame
  // depending on the result of the response from frame before it

  // I didn't need pre-processing, I just needed centralization for the generated script
}
