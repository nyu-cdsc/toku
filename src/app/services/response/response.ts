export class Response {
  data: Map<string, any>;

  constructor(input?) {
    this.data = new Map();
    // this.data.set("id", input ? input.id : Date.now().toString().concat("J")); // todo have machine name be in here?
    this.data.set("participant", input ? input.participant : -1);
    this.data.set("block", input ? input.block : "");
    this.data.set("action", input ? input.action : "");
    this.data.set("response", input ? input.response : "");

    console.log("BUILT NEW RESPONSE ***", this.data);
    // const remainder = [];
    // for (const key in input) {
    //   if (!this.data.get(key)) {
    //     this.data.set(key, input[key]);
    //   }
    // }
  }
  // could also validate -

  // returns header string - call this first
  getCSVHeader() {
    const keys = Array.from(this.data.keys());
    let output = keys.reduce((accum, current, idx) => {
      if (idx === 1) {
        accum = accum + ",";
      }
      return accum + current + ",";
    });
    output += "\n";

    console.log("CSV HEADER OUTPUT", output);
    return output;
  }

  // returns csv formatted version of the object (excluding header)
  toCSV() {
    const keys = Array.from(this.data.keys());
    const values = Array.from(this.data.values());

    const output = keys.reduce((accum, cur, idx) => {
      let temp = "";
      try {
        console.log("inside toCsv", {accum, cur, idx});
        temp += this.csvString(values[idx]);
      } catch (e) {
        if (e instanceof TypeError) {
          if (e.message.indexOf("Cannot read property") !== -1) {
            console.error("Oops, looks like we are missing some data: " + cur + " is empty or malformed in the row: " + this.data);
          }
        }
        console.error("re-throwing exception for further diagnosis");
        throw e;
      }

      console.log("in iteration, TEMP IS", temp);
      return accum += temp;
      // return (accum += temp + ",");
    }, "");

    return output;
  }

  // todo toString()?

  csvString(input) {
    let temp = "";
    if (input === Object(input)) {
      let res = Object.entries(input).reduce( (acc, [key, val], idx) => {
        val = val.toString();
        let cur = `${key}:${val}`;

        acc += cur + ",";
        return acc;
      }, "");
      if (res[res.length -1] === ",") { // remove trailing commas
        res = res.substring(0, res.length - 1);
      }
      res = res.replace(/"/g, "'");
      // res = res.replace(/"/g, `\\"`);
      // res = res.replace(/,/g, `\\,`);

      temp = `"${res}"`;
    } else if (Array.isArray(input)) { // todo separate functions
      let res = input.reduce( (acc, cur, idx) => {
        acc += cur.toString() + ",";
        return acc;
      }, "");
      if (res[res.length -1] === ",") { // remove trailing commas
        res.substring(0, res.length - 1);
      }
      res = res.replace(/"/g, "'");
      // res = res.replace(/"/g, `\"`);
      // res = res.replace(/,/g, `\,`);

      temp = `"${res}"`;
    } else { // TODO DRY this up
      let res = input.toString();
      res = res.replace(/"/g, "'");
      input = `"${res}"`;

      temp += input;
    }

    return temp + ",";
  }

  toJSON() {
    // this.data.forEach((v,k) => { z[k] = v; });

    const keys = Array.from(this.data.keys());
    const out = {};

    keys.map((cur, idx) => {
      out[cur] = this.data[cur];
    });

    return JSON.stringify(out);
  }

  fromJSON(json) {
    const res = JSON.parse(json);
    const keys = Array.from(this.data.keys());

    keys.map((cur, idx) => {
      this.data[cur] = res[cur];
    });
  }
}
