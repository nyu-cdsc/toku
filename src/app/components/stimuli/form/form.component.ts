import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';

@Component({
  selector: 'toku-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements Responsive, Stimuli {
  @Input() parameters: any;
  @Input() responseEnabled = true;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();

  sendMessage(message: Message) {
    console.log('message received in form is', message);
    this.responseEvent.emit(message);
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

  onSubmit(f: NgForm) {
    const result = { value: {} };

    for (const item in f.value) {
      if (f.value.hasOwnProperty(item)) {
        result.value[item] = f.value[item];
      }
    }

    this.sendMessage(result);
  }
}
