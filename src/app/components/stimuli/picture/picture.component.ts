import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from "@angular/core";
import { Stimuli, Responsive } from "../stimuli";
import { Message } from "../../../message";
import { AreaComponent } from "../../responders/area/area.component";

@Component({
  selector: "toku-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent implements Stimuli, Responsive, OnInit, AfterViewChecked {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  @Input() responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  @ViewChild(AreaComponent) areamap: AreaComponent;
  @ViewChild("theimage") theimage: ElementRef;
  value: null;

  constructor() { }
  ngOnInit() { }

  // defect with Angular. null safety check is broken for attribute assignment.
  // height would be set to 0 even if we did not have height in our parameters as
  // opposed to height defaulting to native image size, hence why we are setting
  // height and width here if there's something to set it to
  ngAfterViewChecked() {
    if (this.parameters.height) {
      this.theimage.nativeElement.height = this.parameters.height;
    }
    if (this.parameters.width) {
      this.theimage.nativeElement.width = this.parameters.width;
    }

    // todo right now .parameters.nativeHeight starts out as 0 for a round
    // of the lifecycle and then populates after a second round
    // confirm that this is wired correctly
    if ((this.value == null || this.value === 0) && this.parameters.nativeWidth > innerWidth) {
      this.parameters.scalingFactor = this.getScalingFactor();
      console.log("im inside and setting scaling factor", this.parameters.scalingFactor);
      console.log(this.parameters, "these are the parameters");
      this.value = this.parameters.nativeHeight;
    }
  }

  getFile() {
    if (this.parameters) {
      if (this.parameters["filename"].indexOf("data:") !== -1) {
        return this.parameters["filename"];
      }
      // todo this even necessary? it's just making calls to wherever it's hosted..
      return "http://localhost:3000/assets/" + this.parameters["filename"];
      // TODO ^ fix the url, pass in as env variable in npm/whatever, then push up to here
    }
    return null;
  }

  sendMessage(message: Message) {
    console.log("message received in pic! is", message);
    if (this.parameters.responses[message.value]["action"]) {
      message["action"] = this.parameters.responses[message.value]["action"];
    }
    this.responseEvent.emit(message);
    // todo support multiple reponses in future
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

  getScalingFactor() {
    // scale coordinates based on scaled image width relative to native image width
    const scalingFactor = this.parameters.width / this.parameters.nativeWidth;
    return scalingFactor;
  }
}
