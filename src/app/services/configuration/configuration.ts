
export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  group: number;
  // stimuli: Stimuli[];
  controls?: Control;
  // children?: any[]; // no children, but multiple stimuli that can layer
}
// although ideally instead of layering multiple stimuli, each action really would just have a single stimuli,
// and what we would do is have the ability to leave a 'done' action still displaying
// ..or just layer, and replace the action with a still image in the next action, that would be fine
// but whatever way it happens, being able to have multiple actions/stimuli organized in a viewport would be good

export class Block {
  id: string;
  group: number;
  items: any[]; // can be block or action -- TODO find better word than items
  controls?: Control;
}

export interface Groupable {
  id: string;
  group: number;
}

export class Control {
  pickOne?: boolean;
  shuffle?: boolean;
  repeat?: number; // applies to the entire group
}
// todo none of the above should be optional for the class - they should just have defaults set

// Action -> Command? Component to Actor? Or Command?
// just come up wtih the minimum essential that all these will share and must implement
export interface Stimuli {
  id: string;
  // operation:
  // items:
  file?: string[]; // is optional possible in an interface?
}

// Just inject Movie component here? angular/typescript nuances!
// and get rid of the current Stimuli component, replace with Runner service that is acted upon by just app.component
