import { Stimuli, Parameters } from '../stimuli/stimuli';

// TODO Action -> Frame (represents step in study + positioning of stimuli)
//   all stimuli in Frame, no other abstractions
// but there's nesting, determining which frame actually gets run. is that fine?

// for the sake of making the config/yaml easier, could put 'block' in there (as guiding interface for user)
// and those organize each of the groups of frames, as opposed to direct nesting

// it just doesn't matter. try both later on and see which looks nicer. the groups/nesting only
// exist for the purpose of making decisions, and Control{} can exist in whatever types need it

// block + frame/step would probably be most intuitive

export class Action {
  id: string;
  stimuli: Stimuli[]; // should be able to display several images side by side, above/below, buttons, etc.
  // parameters: Parameters;

  constructor(item) {
    this.validate(item);

    this.id = item.id;
    this.stimuli = item.stimuli;
    // this.parameters = item.parameters; // todo Action has multiple stimuli, so we need to control those
    // // todo do we really? they're all going to have to run simultaneously anyway.
    // new Parameters(item.params); // -- parameters can vary by Stimuli, so it needs to be an interface that each implementation validates
  }

  // todo
  validate(item) {
    return true;
  }
}

// TODO action/Frame/Step might really need to be broken into its own component, to control decisions/responses within/between stimuli before
// passing up at the Block scope

export class Control {
  pickOne?: boolean;
  shuffle?: string;
  repeat?: number;
  runStyle?: string;

  constructor(control) {
    this.validate(control);

    this.pickOne = control.pickOne || false;
    this.shuffle = control.shuffle || "none"; // "deep", "shallow"
    this.repeat = control.repeat || 0; // todo falsy?
    this.runStyle = control.runStyle || "default";
  }

  validate(control) {
    const validShuffle = ['none', 'deep', 'shallow'];
    const validRunStyle = ['sync', 'sequence', 'default']
    if (control.shuffle) {
      if (validShuffle.indexOf(control.shuffle) === -1) {
        // todo throw error/extend angular exceptions/whatever here
      }
    }
    if (control.runStyle) {
      if (validRunStyle.indexOf(control.runStyle) === -1) {
        // todo throw error/extend angular exceptions/whatever here
      }
    }
  }

}
