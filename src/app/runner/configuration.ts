import { Stimuli } from '../stimuli/stimuli';

// TODO -> Frame
export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  stimuli: Stimuli[]; // should be able to display several images side by side, above/below, buttons, etc.
  // todo still might want to get rid of children[] - check with kelsey
  children?: any[]; // contains other actions or controls, to enable organization of interdependent tasks
  control?: Control;
}

export class Control {
  pickOne?: boolean;
  shuffle?: string;
  repeat?: number; // applies to the entire group -- could make it so it optionally accepts a list of IDs to repeat

  constructor() {
    this.pickOne = false;
    this.shuffle = "none"; // "deep", "shallow"
    this.repeat = 0;

    // todo take optional obj from config and do a merge with default properties
  }
}
