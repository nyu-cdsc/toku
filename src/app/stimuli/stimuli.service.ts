import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Stimuli, Parameters } from './stimuli';
import { PictureComponent } from './picture/picture.component';
import { MovieComponent } from './movie/movie.component';

@Injectable({
  providedIn: 'root'
})
export class StimuliService {
  constructor() { }

  stimuliComponentResolver(stimuli: any) {
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

  replaceWithModified(params: Parameters) {
    // export function resolveDifferences(params: Parameters) {
    // how do I decide which things were purposely set, and which need to be set here?
    // it's possible there could be a master/parent/first item in a sequence and it's the only one with
    // a property, and that gets passed down to the others

    // OR I could make it super easy, and ONLY pass down parameters with the modified object? but then that wouldn't
    // actually meet the interface for the parameters, as it would only have some of the values..
    // so it could jsut be an object? is there a type solution for this?
  }
}
