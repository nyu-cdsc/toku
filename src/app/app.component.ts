import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { ConfigurationService } from './services/configuration/configuration.service';
// import { Action } from './services/configuration/configuration';
// import { StimuliItem } from './stimuli-item';
import { buildStimuli, stimuliComponentResolver } from './stimuli/utils';
import { StimloaderDirective } from './stimloader.directive';
import { Parameters, Stimuli } from './stimuli/stimuli';
import { MovieComponent } from './stimuli/movie/movie.component';
import { ResponseService } from './services/response/response.service';
// todo Action, Stimuli clearly belongs somewhere other than the configuration service -- but where?
// stimuli should be defined under stimuli/?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new';
  config: any[];
  currentConfigIndex = -1;
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;

  // todo rename to configurator?
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private configuration: ConfigurationService, responseService: ResponseService) {
    this.config = configuration.genFromRandom(); // todo isn't there a shorthand for this?
    responseService.getDBConnection(this.configuration.getProjectName());
  }

  ngOnInit() {
    // this.testCall();
    this.runThrough();
  }

  runThrough() {
    console.log('runthrough called, current index is ', this.currentConfigIndex);
    // this.config.map(action => {
    //   action.stimuli.map(s => {
    //     buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    //   });
    // });

    // todo need proper step-through, keeping track of where in parent, and all levels below..
    const s = this.config[0][++this.currentConfigIndex].stimuli[0];
    // const s = this.config[0][1].stimuli[0];
    console.log(s);
    this.buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  testCall() {
    const s = this.config[0].stimuli[0];
    // buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);

    this.buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  iterate(data) {

  }

  // this.currentConfigIndex = (this.currentConfigIndex + 1); // DO length check
  // let action: Action = this.config[this.currentConfigIndex];

  // TODO https://blog.angularindepth.com/here-is-how-to-get-viewcontainerref-before-viewchild-query-is-evaluated-f649e51315fb

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(stimuliComponentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    const inst = (<Stimuli>componentRef.instance);
    // console.log(inst);
    inst.parameters = stimuli.parameters;
    console.log(inst);

    inst.finishedEvent.subscribe(data => {
      // this.iterate(data);
      this.runThrough();
    })
    // (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
  }
}
