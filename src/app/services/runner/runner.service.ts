import { Injectable } from '@angular/core';
import { Project } from '../../../STUDY-CONFIG.js';
import { Action, Control } from './configuration';
import { StimuliService } from '../../components/stimuli/stimuli.service';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  list = [];
  stimService = new StimuliService();

  // TODO can also throw in a loop _for development_ that validates the entire config
  // beforehand rather than on iteration. (call stimuliservice.validateAll() in loop)
  // can also have e2e test by running through start to finish
  constructor() {
    // TODO to make testing easier, optionally accept list[] here in param, or setter,
    // or it doesn't matter if the testing classes enable me to just st a class property..
    this.list = this.pickOne(Project.conditions, new Control({ pickOne: true }));

    // TODO ^^ store this as the condition! we need its name - store the name of the first list name, and we've got our condition
    // what about switching between conditions?
  }

  getProjectName() {
    return Project.name;
  }

  getProject() {
    return Project;
  }

  getBlockName(list): string {
    const res = list.filter(item => {
      if (item.name && (Object.keys(item).length === 1)) {
        return item;
      }
    })[0]; // TODO validation for +1 name elements, or just handle

    return res;
  }

  getControlMap(list): Control {
    const res = list.get('control');
    let cont = new Control();
    if (res) {
      cont = new Control(res);
    }

    return cont;
  }

  getControl(list): Control {
    const res = list.filter(item => {
      if (item.type === 'control') {
        return item; // Object.assign(new Control(), item);
      }
    })[0]; // TODO validation for +1 Control elements, or just handle
    // const cont = Object.assign(new Control(), res);
    let cont = new Control();
    if (res) {
      cont = new Control(res);
    }

    return cont;
  }

  // two-way; receives data for conditional decisions
  // TODO also document generator - here and in readme
  *cycle(list?, other?) {
    // *cycle(list, other?) {
    if (!list) {
      list = this.list;
    }
    const control: Control = this.getControl(list);
    list = this.processList(list, control);
    // const name = this.getName(runList);
    // TODO ^

    // TODO find way to deal with logic in here -- also pass through list of funcs?
    let input;
    for (const item of list) {
      if (Array.isArray(item)) {
        input = yield* this.cycle(item, input); // todo what to do with input? pass it on?
      }
      if (item.type !== 'action' && item.type !== 'conditional') {
        continue;
      }
      if (other) {
        input = yield this.processItem(item, other);
        other = null;
      } else {
        input = yield this.processItem(item, input);
      }
    }
    // TODO use Message here and in response service
  }

  // TODO this and its dependent functions should be moved into its own class
  processList(list, control) {
    // todo use observer.pipe() on these  - or just check for errors here
    // TODO separate the actual implementation of the functions from the ones that make decisions based on control{}
    // e.g runShuffle, runRepeat, etc. or baseShuffle, baseRepeat --
    // or move the implementations to their own class and have wrappers defined here
    list = this.shuffleFunctional(list, control);
    list = this.repeat(list, control);
    list = this.pickOne(list, control);

    return list;
  }

  repeat(list, control) {
    let newList = this.clone(list);
    if (control.repeat > 0) {
      for (let i = 0; i < control.repeat; i++) {  // start at 0, count up to repeat amount
        newList = newList.concat(list);
      }
    }

    return newList;
  }

  // TODO is default behavior at random?
  pickOne(list, control) {
    if (control.pickOne) {
      return [this.shuffle(list)[0]];
    }

    return list;
  }

  clone(list) {
    return list.slice(0);
  }

  shuffleFunctional(list, control) {
    if (control.shuffle) {
      list = this.shuffle(list);
    }
    return list;
  }

  // from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
  // Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
  // TODO evaluate shuffle algorithms and swap
  shuffle(list) {
    list = this.clone(list);
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

  processItem(item, input) {
    if (item.type === 'conditional') {
      item = item.items[input[0].value];
      // TODO support multiple responses

      if (Array.isArray(item)) {
        return this.cycle(item);
      }
    }
    // TODO add in conditional support via (input)
    const obj = new Action(item);

    return item;
  }

  // TODO validate action, control, etc here (but not the stimuli? can call stimuliservice.validateAll() for the rest)
  validate() { }
}
