export class Response {
    data: {
        id: number,
        datestamp: string,
        participant: number,
        age: number,
        study: number,
        condition: string,
        trial: string,
        response: number[],
        attnTrial: string,
        attnResponse: number
    } = {
            id: Date.now(),
            datestamp: new Date().toISOString(),
            participant: -1,
            age: -1,
            study: -1,
            condition: '',
            trial: '',
            response: [],
            attnTrial: '',
            attnResponse: -1
    };

    getKeys() {
        return ['id', 'datestamp', 'age', 'study', 'condition', 'trial', 'response', 'attnTrial', 'attnResponse'];
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
            let temp = this.data[cur].toString();

            // for values that are lists - todo move thhis to their toString()
            if (temp.indexOf(',') != -1) {
                temp = '"' + temp + '"';
            }

            return accum += temp + ',';
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

