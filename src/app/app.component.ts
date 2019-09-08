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
  messageCache = [];
  done = false;
  participant = Date.now()
    .toString()
    .concat("K"); // todo - combination of machine/instance identifier + participant count
  project: any;
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
    const projectPromise = this.getProject();
    projectPromise.then(p => {
      this.project = p;
      this.responseService.getDBConnection(p["study"]);
      this.runner.init(p);
      this.iterator = this.runner.cycle();
      const firstBlock = Object.keys(this.runner.block)[0];
      this.cur.condition = firstBlock;
      this.cur.block = firstBlock;
      this.nextAction(null);
    });
  }

  ngOnInit() { }

  getProject() {
    const proj = this.http
      .get("assets/project.yml", { responseType: "text" })
      .toPromise()
      .then(x => {
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
    this.cur.block = cur.value.blockName;
    this.cur.action = cur.value.action;
    console.log("nextaction called, current is: ", cur);
  }

  resetGame() {
    window.location.reload();
  }

  frameResponse(message) {
    this.messageCache.push(message);
    this.responseService.setResponse(
      this.responseService.newResponse(
        this.participant,
        this.cur.block,
        this.cur.action["name"],
        message.value
      )
    );
    // todo ^ move this to generator, just pass cached messages along to it (already doing it anyway)
  }

  frameDone(data) {
    if (this.done) {
      this.resetGame();
    }
    const responses = this.messageCache;
    this.messageCache = [];
    this.nextAction(responses);
    // todo could query the service for every response that took place under the current action, less state in here
  }

  getCSV() {
    return this.responseService.getCSV();
  }
}
