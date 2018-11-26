export class Response {
  // constructor(input) {
  //   this.data = input;
  // }

  data: {
    id: number;
    datestamp: string;
    participant: number;
    study: string; // TODO this is already set as DB name and there's only one study per project -- redundant
    block: string;
    action: string;
    trial: number;
    response: number[];
  } = {
      id: Date.now(),
      datestamp: new Date().toISOString(),
      participant: -1,
      study: '',
      block: '',
      action: '',
      trial: -1,
      response: []
    };
  // TODO ^ clean up

  getKeys() {
    return [
      'id',
      'datestamp',
      'participant',
      'study',
      'block',
      'action',
      'response'
    ];
  }

  // returns header string - call this first
  getCSVHeader() {
    const keys = this.getKeys();
    let output = keys.reduce((accum, current, idx) => {
      if (idx === 1) {
        accum = accum + ',';
      }
      return accum + current + ',';
    });
    output += '\n';

    return output;
  }

  // returns csv formatted version of the object (excluding header)
  toCSV() {
    const keys = this.getKeys();
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
    const keys = this.getKeys();
    const out = {};

    keys.map((cur, idx) => {
      out[cur] = this.data[cur];
    });

    return JSON.stringify(out);
  }

  fromJSON(json) {
    const res = JSON.parse(json);
    const keys = this.getKeys();

    keys.map((cur, idx) => {
      this.data[cur] = res[cur];
    });
  }
}
