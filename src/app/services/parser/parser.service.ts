import { Injectable } from "@angular/core";
import * as yaml from "js-yaml";

@Injectable({
  providedIn: "root"
})
export class ParserService {

  constructor() { }

  load(input, cb) {
    if (!input || input === "undefined" || input === null)  {
      throw new Error("empty input given");
    }

    try {
      const errors = [];
      console.log("IN PARSER, this is input", input);
      const doc = yaml.safeLoad(input);
      console.log("IN PARSER, this is DOC", JSON.stringify(doc, null, 2));
      // todo winston? - log debug vals

      if (!doc.study) {
        errors.push("study missing");
      }
      if (!doc.conditions) {
        errors.push("conditions missing");
      }
      if (!doc.ended) {
        errors.push("ended missing");
      }

      if (errors.length) {
        throw new Error(errors.join(","));
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
    final["study"] = doc["study"];
    final["conditions"] = this.build3(doc["conditions"], doc);
    final["ended"] = this.build3(doc["ended"], doc);
    final["forms"] = doc["forms"]; // todo ^

    return final;
  }

  // todo overload to take string or obj?
  build3(item, doc) {
    console.log("BUILD3 init", "item", item);
    var that = this;
    const res = Object.entries(item).reduce( function loop(acc, [key, val], idx) {
      console.log("build3 reduce", "acc", acc, "key", key, "val", val, "idx", idx);

      if (val === null) { // is var
        const found = that.lookup(key, doc);
        if (!found) {
          throw new Error(`could not find ${key} in document`);
        }
        // found.name = key;
        console.log("found! name  is ", key)
        // found["name"] = key;
        acc[key] = found;
        // acc[key]["name"] = key;
      } else if (val["type"]) { // is stimuli
        console.log("is stimuli!");
        val = that.populateActions(val, doc);
        val["name"] = key;
        acc[key] = val;
      } else if (that.isControl(key)) { // TODO why does this never get called?
        console.log("IS CONTROL!")
        acc[key] = val;
        // process.exit();
        // is control element -- this should be done in buildblock?
        // addToControl(val);
      } else if (Object.keys(val).length) { // is block
        console.log("calling build3 on children");
        const children = that.build3(val, doc);
        children.name = key;
        acc[key] = children;
      } else {
        console.log(key, val)
        throw new Error('what')
      }

      return acc;
    }, item);

    console.log("build3 RESULT IS", res);
    return res;
  }

  /*
  * @param {string} item
  *
  */
  lookup(item, doc) {
    console.log("looking up item", item);
    var that = this;
    const res = Object.entries(doc).reduce( function(acc, [key, val], idx) {
      if (key === "study" || key === "conditions") {
        return acc;
      }
      if (val[item]) {
        if (that.isBlock(val[item])) {
          console.log("IS BLOCK");
          // want to do a recursive lookup for any item that is a var
          console.log("calling build3 on block");
          const built = that.build3(val[item], doc);
          if (!built) { throw new Error(`build failed for ${val[item]} from ${item} on ${doc}`); }
          return built;
        } else if (val[item]["type"]) {
          val[item] = that.populateActions(val[item], doc);
        }
        // return {[item]: val[item]};
        val[item]["name"] = item;
        return val[item];
      }
      return acc;
    }, []);

    console.log("lookup res", res);

    return res || false;
  }

  isControl(item) {
    console.log("in cONTROl, item is ", item)
    const controls = ["pickFirst", "pickRandom", "shuffle", "repeat", "runStyle"];
    return controls.includes(item);
  }

  isBlock(item) {
    return item && typeof item === "object" && !item.type && Object.keys(item).length && !this.isControl(item);
  }

  populateActions(item, doc) {
    if (!item.parameters.responses) { return item; }
    // TODO ^ make item constructor, and this one of its components - that would ensure parameters exists, validation, etc

    console.log("POPULATE, BEFORE", item.parameters.responses);
    item.parameters.responses = Object.entries(item.parameters.responses).reduce( (acc, [key, val], idx) => {
      console.log(key, val);

      if (val["action"] ) {
        acc[key]["action"] = {[val["action"]]: this.lookup(val["action"], doc)};
      }

      acc[key]["name"] = key;
      return acc;
    }, item.parameters.responses);
    console.log("POPULATE, AFTER", item.parameters.responses);

    return item;
  }

  validateDoc() {}

// module.exports = { load, build3, preBuild2, lookup, isControl };
}
