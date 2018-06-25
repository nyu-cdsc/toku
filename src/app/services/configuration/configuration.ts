
export class Action {
  id: string;
  group: number;
  activity?: Stimuli[];
  repeat?: number;
  children?: any[]; // change to PatternGroup || Pattern[] || PatternGroup[]?
}

export class Block {
  id: string;
  group: number;
  pickOne?: boolean;
  randomize?: boolean;
  repeat?: number; // applies to the entire group
  items: any[];
}

export interface Groupable {
  group: number;
}

// Action -> Command? Component to Actor? Or Command?
// just come up wtih the minimum essential that all these will share and must implement
export interface Stimuli {
  id: string;
  // operation:
  // items:
  file?: string[]; // is optional possible in an interface?
}

// then create the movie component, audio component, picture component, etc.
// Block, Action, Actor? for now that's probably fine
// STIMULI? That would work great. Block, Action, Stimuli. Yes!

// Just inject Movie component here? angular/typescript nuances!
// and get rid of the current Stimuli component, replace with Runner service that is acted upon by just app.component
