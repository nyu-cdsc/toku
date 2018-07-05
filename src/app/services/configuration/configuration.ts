
export class Action {
  // could define constructor and then they could be instantiated functionally
  id: string;
  type: 'action';
  stimuli: Stimuli[];
  items?: any[]; // contains other blocks or items, to enable organization of interdependent tasks
  repeat?: number;
  // one could create such a structure with only blocks and Actions would be simpler for it,
  // but it would be less intuitive for the user
}
// although ideally instead of layering multiple stimuli, each action really would just have a single stimuli,
// and what we would do is have the ability to leave a 'done' action still displaying
// ..or just layer, and replace the action with a still image in the next action, that would be fine
// but whatever way it happens, being able to have multiple actions/stimuli organized in a viewport would be good

// export class Block {
//   id: string;
//   items: any[]; // can be block or action -- TODO find better word than items
//   controls?: Control;
// }

// TODO TODO I think I have it
// if I just get rid of Block altogether, and make Control available in the items: any[] list, then I could
// optionally have the controls I want! and the top level would simply be a variable that holds the actions
// or in yaml/toml form, just a repeated list of Action, would work - with optional Control as needed
// this would also keep it flatter.. and these variables would have the names representing their sections
// so it would be like a Block..
// this would also make toml more doable - especially with the tweak


// NOTE: as blocks and actions are so similar, a 'type' value may be necessary for the yaml later

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
