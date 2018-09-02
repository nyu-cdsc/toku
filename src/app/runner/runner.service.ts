import { Injectable } from '@angular/core';
import { Project } from '../../STUDY-CONFIG.js';
import { Action, Control } from './configuration';
import { StimuliService } from '../stimuli/stimuli.service';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  list = [];
  stimService = new StimuliService();

  constructor() {
    // todo parse yaml, choose from random (funcs for each)
    // todo to make testing easier, optionally accept list[] here in param, or setter, or it doesn't matter if the testing classes enable me to just st a class property..

    const list = Project.conditions;
    this.shuffle(list);
    this.list = list[0]; //todo fix
  }

  getProjectName() {
    return Project.name;
  }

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
  // todo also document generator - here and in readme
  *cycle(runList?) {
    if (!runList) {
      runList = this.list;
    }
    const control: Control = this.getControl(runList);
    // todo break this into function processList()
    if (control.shuffle == 'shallow') {
      this.shuffle(runList); // todo make shuffle do immutables!
    }
    else if (control.shuffle == 'deep') {
      this.deepShuffle(runList);
    }

    let input;
    for (let item of runList) {
      if (Array.isArray(item)) {
        input = yield* this.cycle(item);
      }
      if (item.type === 'control') {
        item = runList.next(); // todo does this actually work?
      }
      input = yield this.processItem(item, input);
    }

    // todo verify return value used by yield*
    // todo use proper response/param objs- new interface to hold both?
  }

  // todo TYPES on parameters! just everywhere
  // todo pass control into this? I need to use control at the generator level to know when to ignore the rest of the list though (pickone) and shuffle
  // ..and repeat. I need to essentially manipulate the list I'm reading, which might not be great, so I really need to be creating a new one..
  // which I can do in cycle()

  processItem(item, input) {
    // this.getControl(); // also get control here and go down decision tree / observer pipe list
    // todo add in conditional support via (input)
    const obj = new Action(item);

    return item;
  }

  // todo validate action, control, etc here (but not the stimuli? can call stimuliservice.validateAll() for the rest)
  validate() {

  }

  // tODO we need to get the control before we process any items. so for each level we need to see if this exists, and if not, make it

}
