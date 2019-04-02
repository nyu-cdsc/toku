import { Injectable, Inject } from '@angular/core';
import { Response } from './response';
import * as FileSaver from 'file-saver'; // TODO clean up or replace

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  DBNAME: string;
  STORE = 'responses';
  db;

  constructor(@Inject('environment') env) {
    this.getDBConnection(env.project.study);
  }

  getDBConnection(name) {
    this.DBNAME = name;
    const request = indexedDB.open(this.DBNAME);

    this.db = new Promise(function (resolve, reject) {
      request.onsuccess = function () {
        resolve(request.result);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });

    const that = this;
    request.onupgradeneeded = function () {
      console.log('db being created or upgraded');
      // request.result instead of that.db, as it isn't yet populated at this point (async)
      const responseStore = request.result.createObjectStore(that.STORE, {
        keyPath: 'id'
      });
      responseStore.createIndex('by_id', 'id', { unique: true });
      responseStore.createIndex('by_participant', 'participant', {
        unique: false
      });
      // todo error checking?
      console.log('db creation/upgrade completed');
    };
  }

  closeDB() {
    this.db.then(db => db.close());
  }

  // returns transaction promise - how to define this in typescript? :Promise<IDBTransaction>?
  startTransaction(readonly: boolean = false) {
    let type = 'readwrite';
    if (readonly) {
      type = 'readonly';
    }
    return this.db.then(res => res.transaction(this.STORE, type));
  }

  newResponse(): Response {
    return new Response();
  }

  getResponses(): Promise<Response[]> {
    const responses: Response[] = [];

    const store = this.startTransaction(true).then(transaction => transaction.objectStore(this.STORE));
    const responsePromise: Promise<Response[]> = new Promise(function (
      resolve,
      reject
    ) {
      const req = store.then(s => {
        const resp = s.getAll();

        resp.onsuccess = function () {
          const datas = resp.result;

          if (!datas) {
            console.log('!!! DO NOT HAVE DATA');
            resolve(<Response[]>[]);
          } else {
            console.log('HAVE DATA');
            datas.map(d => {
              console.log(d);
              const r = new Response(d);
              responses.push(r);
            });

            resolve(responses);
          }
        };
      });
    });

    // return promise here, and above give the code to resolve it
    // still need to come up with link, and make sure csv still works

    return responsePromise;
  }

  // if error then reconnect to db
  setResponse(response: Response) {
    const store = this.startTransaction().then(transaction => {
      transaction.onsuccess = function () {
        console.log('transaction success');
      };
      transaction.oncomplete = function () {
        console.log('transaction complete');
      };
      transaction.onabort = function (err) {
        console.log(err.target.result);
        console.log(err.type);
        console.log('transaction failed: ', err);
      };
      return transaction.objectStore(this.STORE);
    });

    const responsePromise: Promise<Response[]> = new Promise(function (
      resolve,
      reject
    ) {
      const req = store.then(s => {
        const payload = {};
        response.data.forEach((v, k) => { payload[k] = v; });
        const resp = s.add(payload);

        resp.onsuccess = function (e) {
          console.log('response queued successfully', e.target.result);
        };
        resp.oncomplete = function (e) {
          console.log('response completed successfully', e.target.result);
        };
        resp.onerror = function (e) {
          console.log('response ERROR', e.target.result, e);
        };
      });
    });

    return responsePromise;
  }

  getCSV() {
    const responsePromise = this.getResponses();
    let output = new Response().getCSVHeader();

    responsePromise.then(function (responses) {
      responses.map((cur, idx) => {
        output += cur.toCSV() + '\n';
      });

      console.log('getCSV OUTPUT');
      console.log(output);
      const file = new Blob([output], { type: 'text/csv' });
      const stamp = new Date().toISOString();
      FileSaver.saveAs(file, this.DBNAME + 'export-' + stamp + '.csv');
    });
  }
}
