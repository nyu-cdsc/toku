import { Type } from '@angular/core';
import { Stimuli } from './stimuli';
import { PictureComponent } from './picture/picture.component';
import { MovieComponent } from './movie/movie.component';


// because currently I don't know how to do this any other way..
export function stimuliComponentResolver(stimuli: Stimuli) {
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
