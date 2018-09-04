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

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private runner: RunnerService, responseService: ResponseService, private stim: StimuliService) {
    responseService.getDBConnection(this.runner.getProjectName());
    // todo this ^ should be done elsewhere - module?
    this.iterator = runner.cycle(); // also this line should be within runner - not needed here
  }

  ngOnInit() {
    this.nextAction(null);
  }

  nextAction(data) {
   // todo check for done=true
    const s = this.iterator.next(data).value;
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
