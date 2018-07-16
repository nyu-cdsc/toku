import { Component, ComponentFactoryResolver, ViewChild, OnInit, ViewContainerRef } from '@angular/core';

import { ConfigurationService } from './services/configuration/configuration.service';
// import { Action } from './services/configuration/configuration';
// import { StimuliItem } from './stimuli-item';
import { buildStimuli, stimuliComponentResolver } from './stimuli/utils';
import { StimloaderDirective } from './stimloader.directive';
import { Parameters, Stimuli } from './stimuli/stimuli';
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
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private configuration: ConfigurationService) {
    this.config = configuration.genFromExample(); // todo isn't there a shorthand for this?
  }

  ngOnInit() {
    this.testCall();
  }

  runThrough() {
    this.config.map(action => {
      action.stimuli.map(s => {
        buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
      });
    });
  }

  testCall() {
    const s = this.config[0].stimuli[0];
    // buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    this.buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
  }

  // this.currentConfigIndex = (this.currentConfigIndex + 1); // DO length check
  // let action: Action = this.config[this.currentConfigIndex];

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(stimuliComponentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
  }
}
