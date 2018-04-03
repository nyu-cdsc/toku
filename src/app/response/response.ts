export class Response {
    id: string = new Date().toISOString(); // datetime should be fine
    age: number = -1;
    study: number = -1;
    condition: string = '';
    trial: string = '';
    response: number[] = [];
    attnTrial: string = '';
    attnResponse: number = -1;

    data = {
        id: "",
        age: -1,

    };


    getKeys() {
        const keys = ['id', 'age', 'study', 'condition', 'trial', 'response', 'attnTrial', 'attnResponse'];

        // was nice and dynamic, but won't work
        // for (let item in this) { 
        //     if (this.hasOwnProperty(item)) {
        //         if (typeof this[item] !== 'function') {
        //             keys.push(item);
        //         }
        //     }
        // }

        return keys;
    }

    // returns header string - call this first
    getCSVHeader() {
        const keys = this.getKeys();
        let output = keys.reduce((accum, current, idx) => {
            if (idx == 1) {
                accum = "'" + accum + "'";
            }
            return accum + ',' + "'" + current + "'";
        });
        output += '\n';

        return output;
    }

    // returns csv formatted version of the object (excluding header)
    toCSV() {
        const keys = this.getKeys();
        const output = keys.reduce((accum, cur, idx) => {
            if (idx == 1) {
                accum = "'" + this[accum].toString() + "'";
            }
            return accum += ',' + "'" + this[cur].toString() + "'";
        });

        return output;
    }

    toJSON() {
        const keys = this.getKeys();
        let out = {};

        keys.map((cur, idx) => {
            out[cur] = this[cur];
        });

        return JSON.stringify(out);
    }

    fromJSON(json) {
        const res = JSON.parse(json);
        const keys = this.getKeys();

        keys.map((cur, idx) => {
            this[cur] = res[cur];
        });
    }
}

