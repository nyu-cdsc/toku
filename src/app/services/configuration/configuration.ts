import { Stimuli } from '../../stimuli/stimuli';

export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  type: 'action';
  stimuli: Stimuli[];
  children?: any[]; // contains other blocks or items, to enable organization of interdependent tasks
  repeat?: number;
  // one could create such a structure with only blocks and Actions would be simpler for it,
  // but it would be less intuitive for the user
}
// although ideally instead of layering multiple stimuli, each action really would just have a single stimuli,
// and what we would do is have the ability to leave a 'done' action still displaying
// ..or just layer, and replace the action with a still image in the next action, that would be fine
// but whatever way it happens, being able to have multiple actions/stimuli organized in a viewport would be good

export class Control {
  type: 'control';
  pickOne?: boolean;
  shuffle?: boolean;
  repeat?: number; // applies to the entire group -- could make it so it optionally accepts a list of IDs to repeat

  constructor() {
    this.type = 'control';
    this.pickOne = false;
    this.shuffle = false;
    this.repeat = 0;
  }
  // todo none of the above should be optional for the class - they should just have defaults set
  // is there a way to do it without the constructor? prototype would be nicer here..
}

// todo create Runner service that actually goes through the list generated here?
