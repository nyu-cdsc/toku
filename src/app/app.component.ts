import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { ResponseService } from "./services/response/response.service";
import { RunnerService } from "./services/runner/runner.service";
import { ParserService } from "./services/parser/parser.service";

@Component({
  selector: "toku-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  study: string;
  iterator: any;
  responseCache = [];
  done = false;
  participant = Date.now(); // todo - combination of machine/instance identifier + participant count
  project: Promise<any>;
  cur = {
    condition: "",
    block: "",
    action: {} // todo
  };

  constructor(
    private http: HttpClient,
    private runner: RunnerService,
    private responseService: ResponseService,
    private parser: ParserService
  ) {
    this.project = this.doThings();
    this.project.then(x => {
      this.runner.init(x);
      this.iterator = this.runner.cycle();
      const firstBlock = Object.keys(this.runner.block)[0];
      this.cur.condition = firstBlock;
      this.cur.block = firstBlock;
      this.nextAction(null);
      // this.nextAction({value: "initial"});
      // this.nextAction({value: "initial2"});
    });
  }

  ngOnInit() {
    // console.log("NGINIT CALLED");
    // begin iteration
  }

  doThings() {
    const proj = this.http.get("assets/project.yml", {responseType: "text"})
    .toPromise().then( x => {
        const p = this.parser.load(x, console.log);
        return this.parser.preBuild2(p);
     });

     return proj;
  }

  studyEnded() {
    console.log("studyEnded() has been called");
    this.done = true;
    const block = this.runner.getBlockByName("ended");
    this.cur.action = block[Object.keys(block)[0]];
  }

  nextAction(data) {
    // todo put in assertions/logs when running in DEV mode
    const cur = this.iterator.next(data);
    if (cur.value === "start") {
      return this.nextAction(data);
    }
    if (cur.done) {
      return this.studyEnded();
    }
    this.cur.block = cur.value.block;
    this.cur.action = cur.value.action;
    console.log("nextaction called, currentAction is: ", this.cur.action);
  }

  // todo remove
  buildResponse(message, block, action) {
    const response = this.responseService.newResponse();
    response.data.set("participant", this.participant);
    response.data.set("response", message.value);
    response.data.set("block", block);
    response.data.set("action", action);
    return response;
  }

  resetGame() {
    window.location.reload();
  }

  frameResponse(message) {
    this.responseCache.push(message);
    // TODO - no newResponse, no buildResponse, just do it all as params/obj in setResponse() // TODO already partially implemented in constructor
    this.responseService.setResponse(this.buildResponse(message, this.cur.block, this.cur.action["id"]));
    // todo ^ move this to generator, just pass cached messages along to it (already doing it anyway)
  }

  frameDone(data) {
    if (this.done) {
      this.resetGame();
    }
    const responses = this.responseCache;
    this.responseCache = [];
    this.nextAction(responses);
    // todo could query the service for every response that took place under the current action, less state in here
  }

  getCSV() {
    return this.responseService.getCSV();
  }
}
