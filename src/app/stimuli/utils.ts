import { Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Stimuli, Parameters } from './stimuli';
import { PictureComponent } from './picture/picture.component';
import { MovieComponent } from './movie/movie.component';


// because currently I don't know how to do this any other way..
// TODO replace with 'componentResolver' which takes a function and then iterates on
// it, removing the potential for cyclic dependencies
export function stimuliComponentResolver(stimuli: any) {
  console.log("INPUT STIM IS", stimuli);
  let res: Type<any>;

  switch (stimuli.type) {
    case 'picture':
      res = PictureComponent;
      break;
    case 'movie':
      res = MovieComponent;
      break;
    default:
      console.error('type not found');
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

export function replaceWithModified(params: Parameters) {
  // export function resolveDifferences(params: Parameters) {
  // how do I decide which things were purposely set, and which need to be set here?
  // it's possible there could be a master/parent/first item in a sequence and it's the only one with
  // a property, and that gets passed down to the others

  // OR I could make it super easy, and ONLY pass down parameters with the modified object? but then that wouldn't
  // actually meet the interface for the parameters, as it would only have some of the values..
  // so it could jsut be an object? is there a type solution for this?
}
