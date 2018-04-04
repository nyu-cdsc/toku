import { Injectable } from '@angular/core';
import { Response } from './response';

@Injectable()
export class ResponseService {
  responses: Response[] = [];
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
      responseStore.createIndex('by_id', 'id');
      // todo error checking?
      console.log('db creation/upgrade completed');
    };
  }

  startTransaction() {
    return this.db.transaction(this.STORE, 'readwrite');
  }

  // getResponses(id): Response[] {
  // }

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
    let output = new Response().getCSVHeader();

    output += this.responses.map((cur, idx) => {
      return cur.toCSV() + '\n';
    });

    return output;
  }

}
