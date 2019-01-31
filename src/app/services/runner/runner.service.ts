import { Injectable, Inject } from '@angular/core';
// import { Project } from '../../../STUDY-CONFIG.js'; // TODO this should be passed in/injected!
import { Action, Control } from './configuration';
import { StimuliService } from '../../components/stimuli/stimuli.service';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  list = [];
  stimService = new StimuliService();
  environment: any;

  // TODO can also throw in a loop _for development_ (use env) that validates the entire config
  // beforehand rather than on iteration. (call stimuliservice.validateAll() in loop)
  // can also have e2e test by running through start to finish
  constructor(@Inject('environment') env) {
    this.environment = env;
    // TODO to make testing easier, optionally accept list[] here in param, or setter,
    // or it doesn't matter if the testing classes enable me to just st a class property..
    this.list = this.pickOne(env.project.conditions, new Control({ pickOne: true }));

    // TODO ^^ store this as the condition! we need its name - store the name of the first list name, and we've got our condition
    // what about switching between conditions?
  }

  getBlockByName(blockName) {
    return this.environment.project[blockName];
  }

  getBlockName(list): string {
    const res = list.filter(item => {
      if (item.name && (Object.keys(item).length === 1)) {
        return item;
      }
    })[0]; // TODO validation for +1 name elements, or just handle

    return res || '';
  }

  // currently unused
  getControlMap(list): Control {
    const res = list.get('control');
    let cont = new Control();
    if (res) {
      cont = new Control(res);
    }

    return cont;
  }

  getControl(list): Control {
    let res = list.filter(item => {
      if (item.type === 'control') {
        return item; // Object.assign(new Control(), item);
      }
    });

    res = res[0]; // TODO validation for +1 Control elements, or just handle

    // const cont = Object.assign(new Control(), res);
    let cont = new Control();
    if (res) {
      cont = new Control(res);
    }

    return cont;
  }

  // TODO make list its own type, then can do list.getControl, list.process, list.getName, etc.
  // actually would not need getControl, as the list would handle all that internally
  // list.repeat, list.pickOne..
  // what is better - having the list run itself or passing it through things? is there a combination of both?
  // ^ or a third - the list is a type and we can have classes of functions that can be loaded in and it sent through those
  // -- such as observable.pipe()
  //   -- at some point there needs to be an atomic piece, and that's the communication value passed between smart objs
  //      the plain/passable obj vs smart -

  // two-way; receives data for conditional decisions
  // TODO also document generator - here and in readme
  // TODO return Message here and in response service
  *cycle(list?, passedInput?) {
    console.log('NEWCYCLE******************************');
    let input = yield 'start';

    if (passedInput) {
      input = passedInput;
      passedInput = null;
    }
    list = list ? list : this.list;

    const control: Control = this.getControl(list);
    const blockName = this.getBlockName(list);
    console.log('in cycle, ', control, blockName);
    list = this.processList(list, control);

    for (const item of list) {
      if (Array.isArray(item)) {
        input = yield* this.cycle(item, input);
      }

      if (item.type === 'conditional') {
        // TODO handle multiple inputs - e.g. multiple responses
        input = yield* this.cycle(item.items[input[0].value], input);
      } else if (item.type === 'action') {
        input = yield { projectName: this.environment.project.name, blockName: blockName, action: item };
      } else {
        continue;
      }
    }
  }

  // TODO this and its dependent functions should be moved into its own class
  processList(list, control) {
    console.log('entered processList, we have: ', list, control);
    // todo use observer.pipe() on these  - or just check for errors here
    // TODO separate the actual implementation of the functions from the ones that make decisions based on control{}
    // e.g runShuffle, runRepeat, etc. or baseShuffle, baseRepeat --
    // or move the implementations to their own class and have wrappers defined here
    list = this.shuffleFunctional(list, control);
    list = this.repeat(list, control);
    list = this.pickOne(list, control);
    console.log('exiting processList, we have: ', list);

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

  // TODO validate action, control, etc here (but not the stimuli? can call stimuliservice.validateAll() for the rest)
  validate() { }

  // can also be used as means to swap between shuffle algorithms
  shuffleFunctional(list, control) {
    if (control.shuffle) {
      console.log('SHUFFLIN');
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

}
