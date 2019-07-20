import { Injectable } from '@angular/core';
import * as yaml from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  constructor() { }

  load(input, cb) {
    if (!input || input == 'undefined' || input == null)  {
      throw new Error('empty input given');
    }

    try {
      const errors = [];
      const doc = yaml.safeLoad(input);
      // todo winston? - log debug vals

      if (!doc.study) {
        errors.push('study missing');
      }
      if (!doc.conditions) {
        errors.push('conditions missing');
      }

      if (errors.length) {
        throw new Error(errors.join(','));
      }

      return doc;
    } catch (e) { // todo use standard cb(success, err) or promise
      if (cb) {
        cb(e);
      } else {
        throw e;
      }
    }
  }

  preBuild2(doc) {
    const final = {};
    final['study'] = doc['study'];
    final['conditions'] = this.build3(doc['conditions'], doc);
    final['forms'] = doc['forms']; // todo ^

    return final;
  }

  // todo overload to take string or obj?
  build3(item, doc) {
    console.log('BUILD3 init', 'item', item);
    const res = Object.entries(item).reduce( function loop(acc, [key, val], idx) {
      console.log('build3 reduce', 'acc', acc, 'key', key, 'val', val, 'idx', idx);

      if (val == null) { // is var
        const found = this.lookup(key, doc);
        if (!found) {
          throw new Error(`could not find ${key} in document`);
        }
        acc[key] = found;
      } else if ((val as any).type) { // is stimuli
        console.log('is stimuli!');
        val = this.populateActions(val, doc);
        acc[key] = val;
      } else if (this.isControl(val)) {
        // process.exit();
        // is control element -- this should be done in buildblock?
        // addToControl(val);
      } else if (Object.keys(val).length) { // is block
        // const children = loop(val);
        console.log('calling build3 on children');
        const children = this.build3(val, doc);
        acc[key] = children;
      }

      return acc;
    }, item);

    console.log('build3 RESULT IS', res);
    return res;
  }

  /*
  * @param {string} item
  *
  */
  lookup(item, doc) {
    console.log('looking up item', item);
    const res = Object.entries(doc).reduce( (acc, [key, val], idx) => {
      if (key == 'study' || key == 'conditions') {
        return acc;
      }
      if (val[item]) {
        if (this.isBlock(val[item])) {
          console.log('IS BLOCK');
          // want to do a recursive lookup for any item that is a var
          console.log('calling build3 on block');
          const built = this.build3(val[item], doc);
          if (!built) { throw new Error(`build failed for ${val[item]} from ${item} on ${doc}`); }
          return built;
        }
        // return {[item]: val[item]};
        return val[item];
      }
      return acc;
    }, []);

    console.log('lookup res', res);

    return res || false;
  }

  isControl(item) {
    const controls = ['pickFirst', 'pickRandom', 'shuffle', 'repeat', 'runStyle'];
    return controls.includes(item);
  }

  isBlock(item) {
    return item && typeof item == 'object' && !item.type && Object.keys(item).length && !this.isControl(item);
  }

  populateActions(item, doc) {
    console.log('POPULATE');
    if (!item.parameters.responses) { return item; }
    // TODO ^ make item constructor, and this one of its components - that would ensure parameters exists, validation, etc

    item.parameters.responses = Object.entries(item.parameters.responses).reduce( (acc, [key, val], idx) => {
      console.log(key, val);

      if ((val as any).action ) {
        acc[key].action = {[(val as any).action]: this.lookup((val as any).action, doc)};
      }
      return acc;
    }, item.parameters.responses);

    return item;
  }

  validateDoc() {}

// module.exports = { load, build3, preBuild2, lookup, isControl };
}
