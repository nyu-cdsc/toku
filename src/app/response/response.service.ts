import { Injectable } from '@angular/core';
import { Response } from './response';
import * as FileSaver from 'file-saver';

@Injectable()
export class ResponseService {
  DBNAME = 'conference';
  STORE = 'responses';
  db;

  constructor() {
    this.getDBConnection();
  }

  getDBConnection() {
    const that = this;
    const request = indexedDB.open(this.DBNAME);

    request.onsuccess = function () {
      that.db = request.result;
    };
    request.onupgradeneeded = function () {
      console.log('db being created or upgraded');
      // request.result instead of that.db, as it isn't yet populated at this point (async)
      const responseStore = request.result.createObjectStore(
        that.STORE, {
          'keyPath': 'id',
        }
      );
      responseStore.createIndex('by_id', 'id', { 'unique': true });
      responseStore.createIndex('by_participant', 'participant', { 'unique': false });
      // todo error checking?
      console.log('db creation/upgrade completed');
    };
  }

  startTransaction(readonly: boolean = false) {
    let type = 'readwrite';
    if (readonly) {
      type = 'readonly';
    }
    return this.db.transaction(this.STORE, type);
  }

  getResponses(): Promise<Response[]> {
    const transaction = this.startTransaction(true);
    const store = transaction.objectStore(this.STORE);
    const responses: Response[] = [];

    const responsePromise: Promise<Response[]> = new Promise(function (resolve, reject) {
      // let datas = [];
      let req = store.getAll();
      req.onsuccess = function() {
        let datas = req.result;
        datas.map(d => {
          let r = new Response();
          r.data = d;

          responses.push(r);
        });

        resolve(responses);
      };
    });


    // return promise here, and above give the code to resolve it
    // still need to come up with link, and make sure csv still works

    return responsePromise;
  }

  // if error then reconnect to db
  setResponse(response: Response) {
    const transaction = this.startTransaction();
    transaction.oncomplete = function () {
      console.log('response stored successfully');
    };
    transaction.onerror = function (err) {
      console.log('transaction failed: ', err);
    };

    const responseStore = transaction.objectStore(this.STORE);
    responseStore.put(response.data);
  }

  getCSV() {
    const responsePromise = this.getResponses();
    let output = new Response().getCSVHeader();

    responsePromise.then(function (responses) {
      responses.map((cur, idx) => {
        output += cur.toCSV() + '\n';
      });

      console.log('OUTPUT');
      console.log(output);
      const file = new Blob([output], { type: 'text/csv' });
      const stamp = new Date().toISOString();
      FileSaver.saveAs(file, 'export-' + stamp + '.csv');
    });
  }

}
