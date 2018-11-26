import {
  Component, ComponentFactoryResolver, EventEmitter, Input, Output, ɵNgOnChangesFeature, ViewChildren, ViewContainerRef, OnChanges
} from '@angular/core';

import { Stimuli, Responsive } from '../stimuli/stimuli';
import { StimuliService } from '../stimuli/stimuli.service';
import { Message } from '../../message';

@Component({
  selector: 'toku-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnChanges {
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  @Input() responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  @Input() action: any;
  // @ViewChildren(StimuliDirective) stimuliChildren: StimuliDirective[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vRef: ViewContainerRef,
    private stimService: StimuliService
  ) {

  }

  ngOnChanges() {
    console.log('ngchanges called, action is ', this.action);
    this.vRef.clear();

    if (this.action.stimuli) {
      for (const stimuli of this.action.stimuli) {
        this.buildStimuli(stimuli, this.vRef, this.componentFactoryResolver);
      }
    }
    console.log('viewcontainer length is ', this.vRef.length);
  }

  done() {
    if (!this.vRef.length) {
      this.doneEvent.emit(null);
    }
  }

  // buildStimuliDirective(stimuli: Stimuli);
  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    console.log('buildstimuli called');
    const componentFactory = resolver.resolveComponentFactory(this.stimService.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    // TODO if I wanted to move the above into a service, I would just need to do:
    //     let componentRef = factory.create(injector);
    // let view = componentRef.hostView;
    // TODO and then attach that view to the viewcontainerref I want - such as in appcomponent

    const inst = <Stimuli | Stimuli & Responsive>componentRef.instance;
    inst.parameters = stimuli.parameters;
    console.log('inst is ', inst);

    const instR = <Responsive>inst; // TODO gah fix - should be a better way in TS
    if (instR) {
      // instR.responseEnabled = false;
      instR.responseEvent.subscribe(message => {
        console.log('responseevent fired');
        this.responseEvent.emit(message);
      });
    }

    inst.doneEvent.subscribe(data => {
      console.log('doneevent fired');
      componentRef.destroy();
      this.done();
    });
  }
}
