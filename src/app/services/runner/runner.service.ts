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
    console.log("NEWCYCLE******************************, input", input);
    // input = yield "start";
    yield "start";
    console.log("INPUT AFTER START", input);

    // input = yield this.logAndReturn(input);

    block = block ? block : this.block;
    console.log("block", block);

    // const control: Control = this.getControl(block);
    // const blockName = Object.keys(block)[0];
    // block[blockName]["name"] = blockName;
    console.log("in cycle, ", block.name, block);
    block = this.processBlock(block);

    for (const [key, val] of Object.entries(block)) {
      console.log("in loop, k v", key, val, "block is", block);
      if (this.isControl(key)) {
        console.log("is control");
        continue;
      }

      console.log("INPUT IN LOOP - 1", input);
      input = yield* this.callNext(val, block, input);
      console.log("INPUT IN LOOP - 2", input);

      // if (this.isBlock(val)) {
      //   console.log("is block")
      //   input = yield* this.cycle(val, input);
      // } else if (this.isConditional(val)) { // TODO support more than one round?
      //   console.log("CONDITIONAL!!!")
      //     input = yield { projectName: this.environment.project.study, blockName: parent.name, action: val };
      //     // second time
      //     console.log("second time, input is? ", input, "item is", val)
      //     let action = val["parameters"]["responses"][input[0].value]["action"];
      //     action = action[Object.keys(action)[0]];

      //     if (this.isBlock(action)) {
      //       input = yield* this.cycle(action, input);
      //     } else {
      //       input = yield { projectName: this.environment.project.study, blockName: block.name, action: action };
      //     }
      // } else if (val["type"]) {
      //   console.log("is action")
      // //   input = yield
      //   input = yield { projectName: this.environment.project.study, blockName: block.name, action: val };
      // } else {
      //   continue;
      // }
    }
  }

  *callNext(item, parent, input) {
    console.log("CALLNEXT, input", input);
    if (!input) { input = [{value: null}]; }
    if (input[0]["action"]) {
      console.log("is CONDITIONAL, REPLACING ACTION");
      item = input[0]["action"];
      input = [{value: null}];
      // if (!this.isBlock(item)) {
      item = item[Object.keys(item)[0]];
      // }
    }
    if (this.second) {
      console.log("second!", item);
    }
    if (this.third) {
      console.log("third!", item);
      // process.exit(0)
    }
    if (this.isBlock(item)) {
      console.log("is BLOCK");
      if (this.third) {
        throw new Error(`we might be caught in a cycle! ${JSON.stringify(item, null, 2)}`);
      }
      if (this.second) {
        console.log("second! - 2", item);
        this.third = true;
      }
      console.log("CALLING CYCLE");
      input = yield* this.cycle(item, input);
    } else if (item["type"]) {
      console.log("is ITEM");
      if (this.second) {
      }
      input = yield { projectName: this.environment.project.study, blockName: parent.name, action: item };
      if (input && input[0]["action"]) {
        this.second = true;
        item = input[0]["action"];
        item = item[Object.keys(item)[0]];
        console.log("GOT RESULT! CALLNEXT", input, item);
        input = yield* this.callNext(item, parent, [{value: null}]);
      }
    }
  }

  logAndReturn(input) {
    console.log("current input is", input);
    return "eh";
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
    console.log("checkingg if block", item);
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
    console.log("entered processList, we have: ", block);
    block = block.shuffle ? this.shuffle(block) : block;
    block = block.repeat ? this.repeat(block, block.repeat) : block;
    block = block.pickFirst ? this.pickFirst(block) : block;
    block = block.pickOne ? this.pickOne(block) : block;
    console.log("exiting processList, we have: ", block);

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
    console.log("IN CLONE, LIST IS", list);
    return list.slice(0);
  }

  // Object.fromEntries not implemented in edge, so this
  fromEntries(list) {
    return list.reduce( (acc, [key, val]) => {
      acc[key] = val;
      return acc;
      }, {});
  }

  shuffle(block) {
    // list = this.clone(list);
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
