import { Injectable } from '@angular/core';

import { Action, Control } from './configuration';
import { exampleConfig, whiteFirstCondition, blackFirst, projectName } from './default';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor() {
    // now in here, pull in the stimuli components as needed via DI (they're loaded in app.module)

  }

  genFromExample() {
    return this.genRunList(exampleConfig);
  }

  getProjectName() {
    return projectName;
  }

  genFromRandom() {
    const list = [whiteFirstCondition, blackFirst];
    this.shuffle(list);

    return this.genRunList(list[0]);
  }

  // here, we are only concerned with building the run list. not with traversing what we've created, but building it
  // by scanning the config file as much as necessary

  genRunList(list) {
    // this would also aid with choosing a single item from a group, if we enable that - pickOnePerGroup -- better naming
    // and I suppose repeat would also be a little easier when working with more focused lists
    //
    // pickOne (again better naming) for blocks/action lists as a whole would naturally be affected by the groups, unless
    // we put full shuffle on everything. think about this! of course they could omit group or just have them all be
    // the same, but there should be defined behavior around this

    // TODO - REMOVE Control objects! those are simply to create the runlist, which should be nothing but actions!
    // or should they remain?
    return list;

  }

  // this helper takes a function, and walks down the list recursively for it
  walkThrough(list, func) {
    const res = list.map(item => {
      if (item.items) {
        const innerRes = this.walkThrough(item.items, func);
      }

      if (Array.isArray(item)) {
        const innerRes = this.walkThrough(item, func); // TODO ensure no clashing with the above! shouldn't happen though
        // console.log('ARRAY IS', item);
      }

      // how to combine innerRes with res?
      // a lot of the complexity here is in trying to return a new list instead of just modifying the original and then
      // checking on it. but some of these functions won't want to change it - and will just be extracting information
      // from it, so I need the facility to get all that information from all levels back

      return func(item);
    });

    // what if I don't want to loop through it this way at all, but to step through it a little at a time?
    // I only need to getControl() at the time I descend another level - it doesn't need to all be preprocessed
    // todo no - it should be. everything should be processed before it ever makes it out of this service

    // if I want it to all be live beforehand, then I want an unmarshal function. otherwise, not seeing the reason for this method
    console.log(res);

    return res;
  }

  // go with this strategy first. one major pass at a time
  deepShuffle(list) {
    // first need to search the current level of list for a Control object
    // then shuffle current list if shuffle is set
    if (this.getControl(list).shuffle) {
      console.log('WE ARE SHUFFLIN');
      this.shuffle(list);
    }

    // now descend through list and shuffle lower levels
    list = list.map(item => {
      if (item.items) {
        item.items = this.deepShuffle(item.items);
      } else if (Array.isArray(item)) {
        item = this.deepShuffle(item);
      }

      return item;
    });

    return list;
  }

  getControl(list): Control {
    const res = list.filter(item => {
      if (item.type === 'control') {
        return item; // Object.assign(new Control(), item);
      }
    })[0]; // todo validation for +1 Control elements, or just handle
    const cont = Object.assign(new Control(), res);

    return cont || new Control();
  }



  // genRunList(list) {
  //   // set trial randomly
  //   const length = list.length;
  //   let result = [];
  //   // if we are randomizing sections
  //   if (list.randomize) {
  //     // const blockCopy = JSON.parse(JSON.stringify(this.block));
  //     // check for primary/ordered item(s)

  // TODO probably want to zip down a list of small filter and map functions, comparator function, shuffle function --
  // just do it that way
  // then easy to add on more features for parsing this list
  // and at some point read the formalized material on parsing..

  // could put all the functions into a list and call them with reduce() against the main list

  // from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
  // Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
  shuffle(list) {
    let ctr = list.length,
      temp,
      index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = list[ctr];
      list[ctr] = list[index];
      list[index] = temp;
    }

    return list;
  }
}
