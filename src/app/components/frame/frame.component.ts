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
  children: any; // todo fix typecheck
  // @ViewChildren(StimuliDirective) stimuliChildren: StimuliDirective[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vRef: ViewContainerRef,
    private stimService: StimuliService
  ) {

  }

  // todo this cannot be an init, but needs to be on change
  ngOnChanges() {
    // todo guard clause
    if (this.action.stimuli) {
      for (const stimuli of this.action.stimuli) {
        this.buildStimuli(stimuli, this.vRef, this.componentFactoryResolver);
      }
    }
    // for (const stimChild of this.stimuliChildren) {
    //   this.buildStimuli(this.action.stimuli[0], this.stimDirective.viewContainerRef, this.componentFactoryResolver);
    //   // TODO this is backwards -- for each stimuli hande to us by action, we should be creating a new stimuliChild directive in the view
    //   // as it currently is, we need to know both at once - this should be two functions
    // }
    // TODO ^ build stimuli for all in list, tear down all after - or just replace this whole component, we'll see
  }

  // buildStimuliDirective(stimuli: Stimuli);
  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(this.stimService.componentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    const inst = <Stimuli | Stimuli & Responsive>componentRef.instance; // todo does this make a difference?
    inst.parameters = stimuli.parameters;

    const instR = <Responsive>inst; // gah
    if (instR) {
      // instR.responseEnabled = false;
      instR.responseEvent.subscribe(message => {
        this.responseEvent.emit(message);
      });
    }

    inst.doneEvent.subscribe(data => {
      this.doneEvent.emit(null);
    });
  }
}
