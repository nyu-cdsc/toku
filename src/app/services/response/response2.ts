export class Response2 {
  data: Map<string, any>;

  // TODO this class + validation unnecessary with rxdb schema validation


  constructor(input?) {
    this.data = new Map();
    // this.data.set("id", input ? input.id : Date.now().toString().concat("J")); // todo have machine name be in here?
    this.data.set('participant', input ? input.participant : -1);
    this.data.set('datestamp', new Date().toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }));
    // TODO ^ above needs timestamp
    this.data.set('block', input ? input.block : '');
    this.data.set('item', input ? input.action : '');
    this.data.set('response', input ? input.response : '');

    console.log('BUILT NEW RESPONSE ***', this.data);
    // const remainder = [];
    // for (const key in input) {
    //   if (!this.data.get(key)) {
    //     this.data.set(key, input[key]);
    //   }
    // }
  }
  // could also validate -

}
