import { Stimuli } from '../stimuli/stimuli';

// TODO Action -> Frame (represents step in study + positioning of stimuli)
//   all stimuli in Frame, no other abstractions
// but there's nesting, determining which frame actually gets run. is that fine?

// for the sake of making the config/yaml easier, could put 'block' in there (as guiding interface for user)
// and those organize each of the groups of frames, as opposed to direct nesting

// it just doesn't matter. try both later on and see which looks nicer. the groups/nesting only
// exist for the purpose of making decisions, and Control{} can exist in whatever types need it

// block + frame/step would probably be most intuitive

export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  stimuli: Stimuli[]; // should be able to display several images side by side, above/below, buttons, etc.
  // children?: any[]; // contains other actions or controls, to enable organization of interdependent tasks
  // children ^ unnecessary when we have blocks/nesting in the config
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
