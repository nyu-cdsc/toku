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
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;
  iterator: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private runner: RunnerService, responseService: ResponseService, private stim: StimuliService) {
    // todo this should be done elsewhere - module?
    responseService.getDBConnection(this.runner.getProjectName());
    this.iterator = runner.cycle(); // also this line should be within runner - not needed here
  }

  ngOnInit() {
    this.nextItem();
  }

  // TODO rename to next() or requestNextFrame(), etc
  nextItem() {
    // todo check for done=true
    const s = this.iterator.next().value;
    console.log(s);
    this.buildStimuli(s.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  // testCall() {
  //   const s = this.config[0].stimuli[0];
  //   // buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);

  //   this.buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  // }

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
      this.nextItem();
    })
  }
}
