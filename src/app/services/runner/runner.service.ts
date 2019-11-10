import { Injectable, Inject } from "@angular/core";
import { Control } from "./configuration";
import { StimuliService } from "../../components/stimuli/stimuli.service";

@Injectable({
  providedIn: "root"
})
export class RunnerService {
  block = {};
  stimService = new StimuliService();
  environment: any;

  // for diagnosis of infinite looping
  second = false;
  third = false;

  constructor(@Inject("environment") env) { }

  init(project) {
    this.environment = {};
    console.log("this is the project", JSON.stringify(project, null, 2));
    this.block = this.pickOne(project.conditions);
    this.environment.project = project;
  }

  // TODO this is a workaround for "ended" functionality, and won't currently work!
  getBlockByName(blockName) {
    return this.environment.project[blockName];
  }

  // two-way; receives data for conditional decisions
  *cycle(block?, input = [{value: null}]) {
    // console.log("NEWCYCLE******************************, input", input);
    yield "start";
    // console.log("INPUT AFTER START", input);

    block = block ? block : this.block;
    block = this.processBlock(block);

    for (const [key, val] of Object.entries(block)) {
      if (this.isControl(key)) {
        continue;
      }

      input = yield* this.callNext(val, block, input);
    }
  }

  *callNext(item, parent, input) {
    console.log("callnext PARENT IS", parent, "ITEM IS", item);
    if (!input) { input = [{value: null}]; }
    if (input[0]["action"]) {
      console.log("callnext CONDITIONAL, REPLACING ACTION");
      item = input[0]["action"];
      input = [{value: null}];
      item = item[Object.keys(item)[0]];
    }
    if (this.isBlock(item)) {
      // console.log("is BLOCK");
      if (this.third) {
        throw new Error(`we are caught in a repeating cycle! ${JSON.stringify(item, null, 2)}`);
      }
      if (this.second) {
        this.third = true;
      }
      // console.log("CALLING CYCLE");
      input = yield* this.cycle(item, input);
    } else if (item["type"]) {
      input = yield { projectName: this.environment.project.study, blockName: parent.name, action: item };
      if (input && input[0] && input[0]["action"]) {
        this.second = true;
        item = input[0]["action"];
        item = item[Object.keys(item)[0]];
        console.log("GOT RESULT! CALLNEXT", input, item);
        input = yield* this.callNext(item, parent, [{value: null}]);
      }
    }
  }

  isConditional(item) {
    if (!item.parameters.responses) { return false; }

    for (const [key, val] of Object.entries(item.parameters.responses)) {
      if (val["action"]) {
        return true;
      }
    }

    return false;
  }

  isBlock(item) {
    // console.log("checkingg if block", item);
    return item && typeof item === "object" && !item.type && Object.keys(item).length && !this.isControl(item);
  }

  getControl(list): Control {
    let res = list.filter(item => {
      if (item.type === "control") {
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

  // TODO dupe from parser..
  isControl(item) {
    const controls = ["pickFirst", "pickOne", "shuffle", "repeat", "runStyle", "name"];
    return controls.includes(item);
  }

  processBlock(block) {
    // console.log("entered processList, we have: ", block);
    block = block.shuffle ? this.shuffle(block) : block;
    block = block.repeat ? this.repeat(block, block.repeat) : block;
    block = block.pickFirst ? this.pickFirst(block) : block;
    block = block.pickOne ? this.pickOne(block) : block;
    // console.log("exiting processList, we have: ", block);

    return block;
  }

  repeat(block, count) {
    const list = Object.keys(block);
    let dupe = this.clone(list);
    for (let i = 0; i < count; i++) {  // start at 0, count up to repeat amount
      dupe = dupe.concat(list);
    }

    return this.fromEntries(dupe);
  }

  pickFirst(block) {
    const first = Object.entries(block).reduce( (acc, [key, val]) => {
      if (!Object.keys(acc).length && !this.isControl(key)) {
        acc = this.fromEntries([[key, val]]);
      }

      return acc;
    }, {});

    return first;
  }

  pickOne(block) {
    return this.pickFirst(this.shuffle(block));
  }

  clone(list) {
    // console.log("IN CLONE, LIST IS", list);
    return list.slice(0);
  }

  // Object.fromEntries not implemented in Edge, so this
  fromEntries(list) {
    return list.reduce( (acc, [key, val]) => {
      acc[key] = val;
      return acc;
      }, {});
  }

  shuffle(block) {
    const list = Object.entries(block);
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

    return this.fromEntries(list);
  }
}
