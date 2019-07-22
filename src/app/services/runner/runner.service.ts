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

  constructor(@Inject("environment") env) { }

  init(project) {
    this.environment = {};
    console.log("this is the project", JSON.stringify(project, null, 2));
    this.block = this.pickRandom(project.conditions);
    this.environment.project = project;
  }

  // TODO this is a workaround for "ended" functionality, and won't currently work!
  getBlockByName(blockName) {
    return this.environment.project[blockName];
  }

  // two-way; receives data for conditional decisions
  *cycle(block?, passedInput?) {
    console.log("NEWCYCLE******************************");
    let input = yield "start";

    if (passedInput) {
      input = passedInput;
      passedInput = null;
    }
    block = block ? block : this.block;
    console.log("block", block)

    // const control: Control = this.getControl(block);
    // const blockName = Object.keys(block)[0];
    // block[blockName]["name"] = blockName;
    console.log("in cycle, ", block.name, block);
    block = this.processBlock(block);

    for (const [key, val] of Object.entries(block)) {
      console.log("in loop, k v", key, val, "second val", block[key], "block is", block)
      if (this.isControl(key)) {
        console.log("is control")
        continue;
      }

      if (this.isBlock(val)) {
        console.log("is block")
        input = yield* this.cycle(val, input);
      // } else if (val["type"] && val["parameters"]["responses"] && input && input[0] && val["parameters"]["responses"][input[0].value]) {
      //   console.log("CALLING CONDITIONAL")
      //   input = yield* this.cycle(val["parameters"]["responses"][input[0].value], input); // TODO handle multiple inputs - e.g. multiple responses
      } else if (val["type"]) {
        console.log("is action")
        input = yield { projectName: this.environment.project.study, blockName: block.name, action: val };
      } else {
        continue;
      }
    }
  }

  isBlock(item) {
    console.log("checkingg if block", item)
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
    const controls = ["pickFirst", "pickRandom", "shuffle", "repeat", "runStyle", "name"];
    return controls.includes(item);
  }

  processBlock(block) {
    console.log("entered processList, we have: ", block);
    block = block.shuffle ? this.shuffle(block) : block;
    block = block.repeat ? this.repeat(block, block.repeat) : block;
    block = block.pickFirst ? this.pickFirst(block) : block;
    block = block.pickRandom ? this.pickRandom(block) : block;
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

  pickRandom(block) {
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
