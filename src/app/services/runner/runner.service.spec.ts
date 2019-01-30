import { inject, TestBed } from '@angular/core/testing';
import { RunnerService } from './runner.service';
import { environment } from '../../../environments/environment';

describe('RunnerService', () => {
  const secondAction: any = {
    type: 'action',
    id: 'secondA',
    stimuli: []
  };
  const thirdAction: any = {
    type: 'action',
    id: 'thirdA',
    stimuli: []
  };
  const fourthAction: any = {
    type: 'action',
    id: 'fourthA',
    stimuli: []
  };
  const fifthAction: any = {
    type: 'action',
    id: 'fifthA',
    stimuli: []
  };

  const testControl: any = {
    type: 'control',
    repeat: 0
  };

  const testConfig: any[] = [
    {
      type: 'action',
      id: 'anotherA', // separate from anotherA defined above, as in a separate group and not a variable
      stimuli: []
    },
    secondAction,
    {
      type: 'conditional',
      id: 'firstCondition',
      items: { // just like blocks elsewhere - just a list. list of actions and lists of lists - although in this case, with keys
        'one': [fourthAction],
        'onetwo': [fourthAction],
        'two': [fourthAction],
        'three': [
          fifthAction,
          fifthAction
        ]
      }
    },
    testControl,
    [
      {
        type: 'control',
        repeat: 0,
        shuffle: true
      },
      thirdAction,
      {
        type: 'action',
        id: 'yetYetAnotherA',
        stimuli: []
      },
      {
        type: 'action',
        id: 'yetYetAnotherA2',
        stimuli: []
      },
      {
        type: 'action',
        id: 'yetYetAnotherA3',
        stimuli: []
      }
    ]
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunnerService, { provide: 'environment', useValue: environment }]
    });
  });

  it('should find control object in group', inject([RunnerService], (service: RunnerService) => {
    const res = service.getControl(testConfig);
    expect(res.repeat).toBe(0);
  }));

  it('should not shuffle if not set', inject([RunnerService], (service: RunnerService) => {
    const cont: any = {
      type: 'control'
    };
    const res = service.shuffleFunctional(testConfig, cont);
    expect(res).toEqual(testConfig);
  }));

  it('should shuffle if set', inject([RunnerService], (service: RunnerService) => {
    const cont: any = {
      type: 'control',
      repeat: 3,
      shuffle: true
    };
    const source = service.repeat(testConfig, cont); // increase reliability of test by making source larger
    const res = service.shuffleFunctional(source, cont);
    expect(res.length).toEqual(source.length, 'length of shuffled list should be the same as original');

    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i].id === source[i].id) {
        count++;
      }
    }
    expect(count).not.toEqual(res.length, 'items in shuffled list should not be in the same location');
  }));

  // TODO - account for the result being an entire block instead of just an action? would be resolved if it were an object..
  it('should pickOne if set', inject([RunnerService], (service: RunnerService) => {
    const cont: any = {
      type: 'control',
      pickOne: true
    };
    const res = service.pickOne(testConfig, cont);
    expect(res.length).toBe(1);
  }));

  it('should repeat number of times set', inject([RunnerService], (service: RunnerService) => {
    const cont: any = {
      type: 'control',
      repeat: 2
    };
    const res = service.repeat(testConfig, cont);
    // if repeat is 0, length is equivalent to origLength * (1 + 0) (e.g. it's the same, and 1+1 if repeat doubles it, etc..)
    expect(res.length).toBe(testConfig.length * (1 + cont.repeat));
  }));

  it('should clone', inject([RunnerService], (service: RunnerService) => {
    const res = service.clone(testConfig);
    expect(res === testConfig).toBe(false);
    expect(res).toEqual(testConfig); // deep comparison
  }));

  it('(generator) should receive value even on nested iteration', inject([RunnerService], (service: RunnerService) => {
    // check for value being passed in to processItem, processList, etc.
    const iterator = service.cycle(testConfig);
    let val = iterator.next();
    // console.log(val);
    // val = iterator.next([{ value: 'one' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'onetwo' }]);
    // console.log(val);
    // // expect(val.value[2]).toBe('action');
    // // expect(val.value[1]).toBe('secondA');
    // val = iterator.next([{ value: 'onetwo' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'three' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'three' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'three' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'three' }]);
    // console.log(val);
    // val = iterator.next([{ value: 'three' }]);
    // console.log(val);

  }));

  it('(generator) should make decision based on data passed in, when conditional set', inject([RunnerService], (service: RunnerService) => {
    // ^
  }));

});
