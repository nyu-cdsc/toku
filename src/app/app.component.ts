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
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;
  iterator: any;

  // todo rename to configurator?
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private configuration: ConfigurationService, responseService: ResponseService) {
    this.config = configuration.genFromRandom(); // todo isn't there a shorthand for this?
    responseService.getDBConnection(this.configuration.getProjectName());
    // todo setting config above now unnecessary
    this.iterator = this.iterate(this.config);
  }

  ngOnInit() {
    // this.testCall();
    this.runThrough();
  }

  runThrough() {
    // this.config.map(action => {
    //   action.stimuli.map(s => {
    //     buildStimuli(s, this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    //   });
    // });

    // todo need proper step-through, keeping track of where in parent, and all levels below..
    // const s = this.config[0][++this.currentConfigIndex].stimuli[0];

    this.nextItem();
    // const s = this.config[0][1].stimuli[0];
  }

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

  // todo rewrite in like ten lines with a generator
  iterate(data) {
    function iterator(data) {
      const iterStack = [];
      iterStack.push(data[Symbol.iterator]());

      function getCurentIter() {
        return iterStack[iterStack.length - 1];
      }
      function next() {
        const res = getCurentIter().next();
        if (res.done) {
          if (iterStack.length > 1) {
            iterStack.pop();
            return next();
          }
        }
        if (Array.isArray(res.value)) {
          iterStack.push(res.value[Symbol.iterator]());
          return next();
        }

        return res;
      }

      return { next: next.bind(this) };
    }

    return iterator(data);
  }

  // this.currentConfigIndex = (this.currentConfigIndex + 1); // DO length check
  // let action: Action = this.config[this.currentConfigIndex];

  // TODO https://blog.angularindepth.com/here-is-how-to-get-viewcontainerref-before-viewchild-query-is-evaluated-f649e51315fb
  // TODO and iterator moved to config service, and above to render service?
  // iterator should be own service? or config works fine.. but idea is it only iterates over array/map produced by config
  // and render is totally separate, but could call iterator? or some controller calls both?
  // don't overdo it
  // iterator and renderer can be combined in runner service, could implement both or just include both

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
      // this.runThrough();
      this.nextItem();
    })
    // (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
  }
}
