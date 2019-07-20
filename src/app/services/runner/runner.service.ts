import { Injectable, Inject } from '@angular/core';
import { Control } from './configuration';
import { StimuliService } from '../../components/stimuli/stimuli.service';

@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  list = [];
  stimService = new StimuliService();
  environment: any;

  constructor(@Inject('environment') env) {
    // TODO to make testing easier, optionally accept Project here in param -- or just manage env for testing
    // this.environment = env;
    // console.log('this is the project', JSON.stringify(env.project, null, 2));
    // this.list = this.pickRandom(env.project.conditions, new Control({ pickOne: true }));
  }

  setProject(project) {
    console.log('this is the project', JSON.stringify(project, null, 2));
    this.list = this.pickRandom(project.conditions);
    this.environment.project = project;
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
        input = yield { projectName: this.environment.project.study, blockName: blockName, action: item };
      } else {
        continue;
      }
    }
  }

  getControl(list): Control {
    let res = list.filter(item => {
      if (item.type === 'control') {
        return item; // Object.assign(new Control(), item);
      }
    });

    res = res[0];

    // const cont = Object.assign(new Control(), res);
    let cont = new Control();
    if (res) {
      cont = new Control(res);
    }

    return cont;
  }

  // TODO - can get rid of the concept of Control{} by looking at block for each of these items, as it is
  // TODO - now by key. e.g. if(block.repeat) -- much simpler

  processList(list, control) {
    console.log('entered processList, we have: ', list, control);
    list = control.shuffle ? this.shuffle(list) : list;
    list = control.repeat ? this.repeat(list, control.repeat) : list;
    list = control.pickFirst ? this.pickFirst(list) : list;
    list = control.pickRandom ? this.pickRandom(list) : list;
    console.log('exiting processList, we have: ', list);

    return list;
  }

  repeat(list, count) {
    let dupe = this.clone(list);
    for (let i = 0; i < count; i++) {  // start at 0, count up to repeat amount
      dupe = dupe.concat(list);
    }

    return dupe;
  }

  pickFirst(list) {
    if (list[0].type === 'control') {
      return list[1]; // skip it
    }

    return list[0];
  }

  pickRandom(list) {
    const shuffled = this.shuffle(list);
    if (shuffled[0].type === 'control') { // skip it
      return [shuffled[1]];
    }

    return [shuffled[0]];
  }

  clone(list) {
    return list.slice(0);
  }

  shuffle(list) {
    list = this.clone(list);
    let counter = list.length;
    let temp, index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;

      // swap the last element with current -- todo do without temp var
      temp = list[counter];
      list[counter] = list[index];
      list[index] = temp;
    }

    return list;
  }

}
