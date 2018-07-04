import { Injectable } from '@angular/core';

import { Groupable } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  constructor() {
    // now in here, pull in the stimuli components as needed via DI (they're loaded in app.module)

    // this.extractGroups.bind(this);
  }

  // here, we are only concerned with building the run list. not with traversing what we've created, but building it
  // by scanning the config file as much as necessary

  genRunListNew(list) {
    // if (!this.validateList(list)) {
    //   // throw actual error here/manage as desired
    // }

    // this.orderByGroup(list);
    // so the groups have to be extracted recursively in order to act upon them..
    // const groups = list.reduce(this.extractGroups, []);


    // TODO ^ it should also be checking for shuffle being set -- and that would affect the behavior of the above
    // -- or it might be best to take that sorted list, break everything into actual Groups, and operate on them then
    // although it's possible to do that without the additional sorting step, I suppose it needs to be done anyway?
    // -- unless a new list is composed afterward with the groups all put back together
    // sorting is probably necessary regardless - it just may be done before or after
    //
    // so the next step is definitely to take those groups and break them into independent lists
    // perhaps this, and the ordering of those lists, should be composed of two new, smaller functions that focus on always,
    // _always_ breaking out groups into their own lists and managing them from there - then the shuffle is simply an
    // additional operation applied when desired
    //
    // this would also aid with choosing a single item from a group, if we enable that - pickOnePerGroup -- better naming
    // and I suppose repeat would also be a little easier when working with more focused lists
    //
    // pickOne (again better naming) for blocks/action lists as a whole would naturally be affected by the groups, unless
    // we put full shuffle on everything. think about this! of course they could omit group or just have them all be
    // the same, but there should be defined behavior around this


  }

  // extractGroups(accum, item) {
  //   console.log('THIS IS ', this);
  //   if (!accum[item.group]) {
  //     accum[item.group] = [];
  //   }

  //   if (item.items) {
  //     item.items.map(i => console.log(i));
  //     item.items = item.items.reduce(this.extractGroups.bind(this), []);
  //     item.items.map(i => console.log(i));
  //   }
  //   // goal is to recursively take care of breaking all the groups into their lists before returning at top level
  //   // blocks organize actions, actions do NOT organize themselves, so this is simpler to look for
  //   accum[item.group].push(item);
  //   return accum;
  // }

  // // todo this can be removed as actions will no longer be groupable
  // testGroupable(item: Groupable): item is Groupable {
  //   // TODO proper logging here if something isn't right, so it is traceable later
  //   return (<Groupable>item).group !== undefined;
  // }

  // validateList(list) {
  //   return list.every(val => {
  //     let innerRes = true;
  //     if (val.items) {
  //       innerRes = this.validateList(val.items);
  //     }

  //     const res = this.testGroupable(val);

  //     if (!innerRes || !res) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }

  // recurses down list that meets the Groupable interface and orders them
  // orderByGroup(list) {
  //   list.sort(this.groupSorter);

  //   // console.log(list);
  //   // console.log(list[0].items);
  //   // todo want to return new object! copy val and then sort? immutable sort?

  //   // todo is the return even necessary? isn't the reference being manipulated above? check!
  //   return list;
  // }

  // groupSorter(a, b) {
  //   if (a.group > b.group) {
  //     return 1;
  //   } else if (a.group < b.group) {
  //     return -1;
  //   }

  //   return 0;
  // }

  // genRunList(list) {
  //   // set trial randomly
  //   const length = list.length;
  //   let result = [];
  //   // basically see if an item in the list matches an interface, and if it does, recurse through it
  //   // blocks and trials will meet that interface
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
