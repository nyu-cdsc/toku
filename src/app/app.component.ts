import { Component, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';

import { ConfigurationService } from './services/configuration/configuration.service';
import { Action } from './services/configuration/configuration';
import { StimuliItem } from './stimuli-item';
import { stimuliComponentResolver } from './stimuli/utils';
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
        this.buildStimuli(s);
      });
    });
  }

  testCall() {
    const s = this.config[0].stimuli[0];
    this.buildStimuli(s);
  }

  buildStimuli(stimuli: Stimuli) {
    // this.currentConfigIndex = (this.currentConfigIndex + 1); // DO length check
    // let action: Action = this.config[this.currentConfigIndex];

    // const stimHolder = new StimuliItem(s);
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(stimHolder.component);
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MovieComponent);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(stimuliComponentResolver(stimuli));

    const viewContainerRef = this.stimDirective.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<Stimuli>componentRef.instance).parameters = stimuli.parameters;

  }

}
