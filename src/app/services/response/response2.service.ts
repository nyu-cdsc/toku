import { Injectable, Inject } from '@angular/core';
import { Response2 } from './response2';
import * as FileSaver from 'file-saver'; // TODO clean up or replace
import RxDB from 'rxdb';
import * as pouchIdb from 'pouchdb-adapter-idb';
import * as pouchHttp from 'pouchdb-adapter-http';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  DBSTUDY: string;
  STORE = 'responses';
  db;
  collection;
  replicationState;
  responseSchema = {
    title: 'response',
    description: 'schema for a study response',
    version: 0,
    type: 'object',
    properties: {
      participant: {
        type: 'string'
        // pattern: ""
      },
      datestamp: {
        type: 'string' // todo date-time
      },
      block: {
        type: 'string'
      },
      item: {
        type: 'string'
      },
      response: {
        type: ['string', 'object', 'array']
      }
    },
    required: ['participant', 'block', 'item', 'response']
  };

  constructor() { }
  getDBConnection(study, id) {
    RxDB.plugin(pouchIdb);
    RxDB.plugin(pouchHttp);

    this.db = RxDB.create({
      name: study.toLowerCase(),
      adapter: 'idb'
    });

    // todo can get by this.db['collection']
    this.collection = this.db.then(db => db.collection({
      name: 'responses',
      schema: this.responseSchema, // TODO -> https!!
      sync: true
    }));

    this.collection.then(col => console.dir(col));
    this.replicationState = this.collection.then(col => col.sync({
      remote: location.origin + '/db/responses', // + study + id, // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
      // TODO make current domain..
      waitForLeadership: true,              // (optional) [default=true] to save performance, the sync starts on leader-instance only
      direction: {                          // direction (optional) to specify sync-directions
        pull: false, // default=true
        push: true  // default=true
      },
      options: {                             // sync-options (optional) from https://pouchdb.com/api.html#replication
        live: true,
        retry: true
      },
    }));
  }

  newResponse(participant, block, action, response): Response2 {
    // TODO replace with db.newDocument()
    return new Response2({participant, block, action, response});
  }

  export() {
    return this.db.then(db => db.dump());
  }

  // TODO if error then reconnect to db
  setResponse(response: Response2) {
    const payload = {};
    response.data.forEach((v, k) => { payload[k] = v; });
    this.db.then(d => d['responses'].insert(payload).then(
      res => console.log(res),
      rej => console.error(rej)
    ));
  }

  getCSV() {
    this.export().then(data => {
      // replace with json2csv on full dataset
      const csvName = this.DBSTUDY;

      // console.log("getCSV OUTPUT", output);
      // const file = new Blob([output], { type: "text/csv" });
      // const stamp = new Date().toISOString().split("T")[0];
      // FileSaver.saveAs(file, csvName + "_data_exported" + stamp + ".csv");
    });
  }

  getJSON() {
    this.export().then(data => {
      const stamp = new Date().toISOString().split('T')[0];
      const filename = this.DBSTUDY + '_export_' + stamp + '.json'; // todo machine name

      // console.log("getCSV OUTPUT", output);
      // const file = new Blob([output], { type: "text/csv" });
      // FileSaver.saveAs(file, filename);
    });
  }
}
