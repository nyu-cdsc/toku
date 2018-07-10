import { Stimuli } from '../../stimuli/stimuli';

export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  type: 'action';
  stimuli: Stimuli[]; // should be able to display several images side by side, above/below, buttons, etc.
  children?: any[]; // contains other actions or controls, to enable organization of interdependent tasks
  // todo still might want to get rid of this - check with kelsey
  repeat?: number; // move to Control? Parameters vs Control?
  control?: Control;
  // one could create such a structure with only blocks and Actions would be simpler for it,
  // but it would be less intuitive for the user
}
// although ideally instead of layering multiple stimuli, each action really would just have a single stimuli,
// and what we would do is have the ability to leave a 'done' action still displaying
// ..or just layer, and replace the action with a still image in the next action, that would be fine
// but whatever way it happens, being able to have multiple actions/stimuli organized in a viewport would be good

export class Control {
  type: 'control'; // the type itself on the class is not necessary, just on the input list
  pickOne?: boolean;
  shuffle?: boolean;
  repeat?: number; // applies to the entire group -- could make it so it optionally accepts a list of IDs to repeat

  constructor() {
    this.type = 'control';
    this.pickOne = false;
    this.shuffle = false;
    this.repeat = 0;
  }
  // is there a way to do defaults without the constructor? prototype would be nicer here..
  // doesn't matter, as all this will be instantiated and in its absence will be done from scratch - have function already that does this
}
// TODO - shuffle should be:
// shuffle: deep, shallow, none (default)

// todo create Runner service that actually goes through the list generated here?
