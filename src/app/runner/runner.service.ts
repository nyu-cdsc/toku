import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  list = [];

  constructor() {
    // todo parse yaml, choose from random (funcs for each)
    // todo to make testing easier, optionally accept list[] here in param

    const list = [whiteFirstCondition, blackFirst];
    this.shuffle(list);
    this.list = list[0]; //todo fix
  }


  getProjectName() {
    return projectName;
  }

  // todo -- stimuliService has validation and resolution. instantiation takes place inside parent component that calls this (it calls stimservice for resolution and
  // then renders)
  // todo stimuli validation is per stimuli component, with stimuliService function that sorts it out based on what we pass it
  // TODO yeah. have a main Stimuli.validate() function, that is passed the current object in config and it checks it via 'type'
  // TODO can also throw in a loop _for development_ that validates the entire config beforehand rather than on iteration. but that is optional
  // can also have e2e test by running through start to finish

  getControl(list): Control {
    const res = list.filter(item => {
      if (item.type === 'control') {
        return item; // Object.assign(new Control(), item);
      }
    })[0]; // todo validation for +1 Control elements, or just handle
    const cont = Object.assign(new Control(), res);

    return cont || new Control();
  }

  // TODO observer.pipe() comparator function, shuffle function, pick, etc. --

  // go with this strategy first. one major pass at a time
  deepShuffle(list) {
    // first need to search the current level of list for a Control object
    // then shuffle current list if shuffle is set
    if (this.getControl(list).shuffle) {
      console.log('WE ARE SHUFFLIN');
      this.shuffle(list);
    }

    // now descend through list and shuffle lower levels
    list = list.map(item => {
      if (item.items) {
        item.items = this.deepShuffle(item.items);
      } else if (Array.isArray(item)) {
        item = this.deepShuffle(item);
      }

      return item;
    });

    return list;
  }

  // from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
  // Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
  shuffle(list) {
    let ctr = list.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = list[ctr];
      list[ctr] = list[index];
      list[index] = temp;
    }

    return list;
  }

  // two-way; receives data for conditional decisions
  * cycle(runList) {
    let input;
    for (let item of runList) {
      if (Array.isArray(item)) {
        input = yield* this.cycle(item);
      }
      input = yield processItem(item, input);
    }

    // todo use proper response/param objs- new interface to hold both?
  }
}

