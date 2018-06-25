import { Injectable } from '@angular/core';

import { Groupable } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() {
    // now in here, pull in the stimuli components as needed via DI (they're loaded in app.module)

  }

  // types are in config.ts
  //
  // here, we are only concerned with building the run list. not with traversing what we've created, but building it
  // by traversing the config file as much as necessary

  // so when I'm making a runList, all I'm doing is organizing the taskGroups, and then the tasks
  // so I don't have to worry about interfaces that way, as literally any list is going to be one or the other
  // a taskGroup holds tasks and its properties
  //
  // but the runlist does need to also look at each task itself to determine what needs to be done - repeat, basically
  // and ordering within the taskGroup itself means looking at the tasks. fine.

  // this goes through the entire list in the config file, blocks, trials etc and does all operations needed
  // to create the runlist

  genRunListNew() {
    //
  }

  // recurses down list that meets the Groupable interface and orders them
  orderByGroup(list) {
    list.map(val => {
      if (!<Groupable>val) {
        // mixed here. probably want to error out if there's anything in the list that is NOT groupable, so do that for now
        // TODO proper error handling like right now.

        // error here
        return 'ERRNOTGROUP';
      }
    });

    list.sort(this.groupSorter);

    console.log(list);
    console.log(list[0].items);
    // todo want to return new object! copy val and then sort? immutable sort?

    return list;
  }

  groupSorter(a, b) {
    if (a.group > b.group) {
      return 1;
    } else if (a.group < b.group) {
      return -1;
    }

    return 0;
  }

  genRunList(list) {
    // set trial randomly
    const length = list.length;
    let result = [];

    // basically see if an item in the list matches an interface, and if it does, recurse through it
    // blocks and trials will meet that interface

    // if we are randomizing sections
    if (list.randomize) {
      // const blockCopy = JSON.parse(JSON.stringify(this.block));
      // check for primary/ordered item(s)

      const temp = [];
      const final = [];
      // TODO use proper sorting function, pop/unshift?
      // and use map/filter..
      // could use filter to get all the ones that aren't needed
      for (const item of list) {
        if (item.primary) {
          result.push(item);
        } else if (item.final) {
          final.push(item);
        } else {
          temp.push(item);
        }
      }

      this.shuffleList(temp);
      result.push.apply(result, temp);
      result.push.apply(result, final); // add items marked final to the end
    } else {
      result = list; // NOTE this isn't checking if they're actually sorted right
    }

    return list;
  }

  // TODO probably want to zip down a list of small filter and map functions, comparator function, shuffle function --
  // just do it that way
  // then easy to add on more features for parsing this list
  // and at some point read the formalized material on parsing..

  // unless I can think of a clever way to randomize while sorting, can't do this here
  // orderList(a, b) {
  //   if (a.primary) {
  //     return -1;
  //   }
  //   if (a.final || (typeof a.primary ===  'undefined' && b.primary)) {
  //     return 1;
  //   }

  //   return 0;
  // }

  // from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
  // Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
  shuffleList(list) {
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
