export class Response {
  data: Map<string, any>;
  // keys = [
  //   ['id', Date.now()],
  //   ['datestamp', new Date().toISOString()],
  //   ['participant', -1],
  //   ['block', ''],
  //   ['action', ''],
  //   ['response', '']
  // ];

  constructor(input?) {
    this.data = new Map();
    this.data.set('id', input ? input.id : Date.now()); // todo make better
    this.data.set('datestamp', input ? input.datestamp : new Date().toISOString());
    this.data.set('participant', input ? input.participant : -1);
    this.data.set('block', input ? input.block : '');
    this.data.set('action', input ? input.action : '');
    this.data.set('response', input ? input.response : '');

    // const remainder = [];
    for ( const key in input ) {
      if( !this.data.get(key) ) {
        this.data.set(key, input[key]);
      }
    }
  }
  // could also validate -

  // TODO by initializing from objects in indexeddb vs arrays, order is not guaranteed

  // returns header string - call this first
  getCSVHeader() {
    const keys = Array.from(this.data.keys());
    let output = keys.reduce((accum, current, idx) => {
      if (idx === 1) {
        accum = accum + ',';
      }
      return accum + current + ',';
    });
    output += '\n';

    return output;
  }

  // why is header/toCSV separate? -- tocsv being run on each response obj and header only once

  // returns csv formatted version of the object (excluding header)
  toCSV() {
    const keys = Array.from(this.data.keys());
    const output = keys.reduce((accum, cur, idx) => {
      if (idx === 1) {
        accum = this.data[accum].toString() + ',';
      }

      let temp = '';
      if (this.data[cur] === Object(this.data[cur])) {
        temp = JSON.stringify(this.data[cur]);
      } else {
        temp = this.data[cur].toString();
        if (temp.indexOf(',') !== -1) {
          temp = '"' + temp + '"';
        }
      }
      // for values that are lists - todo move thhis to their toString()

      return (accum += temp + ',');
    });

    return output;
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
