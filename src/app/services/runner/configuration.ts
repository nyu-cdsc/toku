import { Stimuli } from '../../components/stimuli/stimuli';
// TODO Action -> Frame (represents step in study + positioning of stimuli)

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

export class Control {
  pickOne = false;
  shuffle = false;
  repeat = 0;
  runStyle = 'default';

  constructor(control?) {
    if (control) {
      this.validate(control);
      if (control.pickOne) { this.pickOne = control.pickOne; }
      if (control.shuffle) { this.shuffle = control.shuffle; }
      if (control.repeat) { this.repeat = control.repeat; } // todo falsy?
      if (control.runStyle) { this.runStyle = control.runStyle; }
    }
  }

  validate(control) {
    // const validShuffle = ['none', 'deep', 'shallow'];
    const validRunStyle = ['sync', 'sequence', 'default'];
    // if (control.shuffle) {
    //   if (validShuffle.indexOf(control.shuffle) === -1) {
    //     // todo throw error/extend angular exceptions/whatever here
    //   }
    // }
    if (control.runStyle) {
      if (validRunStyle.indexOf(control.runStyle) === -1) {
        // todo throw error/extend angular exceptions/whatever here
      }
    }
  }

}
