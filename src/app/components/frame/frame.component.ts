import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ɵNgOnChangesFeature, OnInit, ViewChildren, ViewContainerRef, OnChanges } from '@angular/core';

import { StimuliDirective } from '../stimuli.directive'; // todo directives dir
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

  // todo this cannot be an init, but needs to be on change
  ngOnChanges() {
    this.vRef.clear();

    if (this.action.stimuli) {
      for (const stimuli of this.action.stimuli) {
        this.buildStimuli(stimuli, this.vRef, this.componentFactoryResolver);
      }
    }
  }

  done() {
    if (!this.vRef.length) {
      this.doneEvent.emit(null);
    }
  }

  // buildStimuliDirective(stimuli: Stimuli);
  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(this.stimService.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    const inst = <Stimuli | Stimuli & Responsive>componentRef.instance;
    inst.parameters = stimuli.parameters;

    const instR = <Responsive>inst; // gah
    if (instR) {
      // instR.responseEnabled = false;
      instR.responseEvent.subscribe(message => {
        this.responseEvent.emit(message);
      });
    }

    inst.doneEvent.subscribe(data => {
      componentRef.destroy();
      this.done();
    });
  }
}
