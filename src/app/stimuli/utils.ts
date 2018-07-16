import { Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Stimuli } from './stimuli';
import { PictureComponent } from './picture/picture.component';
import { MovieComponent } from './movie/movie.component';


// because currently I don't know how to do this any other way..
export function stimuliComponentResolver(stimuli: any) {
  let res: Type<any>;

  switch (stimuli.type) {
    case 'picture':
      res = PictureComponent;
      break;
    case 'movie':
      res = MovieComponent;
      break;
  }

  return res;
}

// todo move to service/use injection to get the componentFactoryResolver
// todo doesn't even work
export function buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
  const componentFactory = resolver.resolveComponentFactory(this.stimuliComponentResolver(stimuli));
  view.clear();

  const componentRef = view.createComponent(componentFactory);
  (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
}
