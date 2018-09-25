import { inject, TestBed } from '@angular/core/testing';

import { RunnerService } from './runner.service';

describe('RunnerService', () => {
  const secondAction: any = {
    type: 'action',
    id: 'secondA',
    stimuli: []
  };

  const testControl: any = {
    type: 'control',
    repeat: 1
  };

  const testConfig: any[] = [
    {
      type: 'action',
      id: 'anotherA', // separate from anotherA defined above, as in a separate group and not a variable
      stimuli: []
    },
    secondAction,
    testControl,
    [
      {
        type: 'control',
        repeat: 1,
        shuffle: true
      },
      secondAction,
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
      providers: [RunnerService]
    });
  });

  it('should find control object in group', inject([RunnerService], (service: RunnerService) => {
    const res = service.getControl(testConfig);
    expect(res.repeat).toBe(1);
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
      shuffle: true
    };
    const res = service.shuffleFunctional(testConfig, cont);
    expect(res.length).toEqual(testConfig.length, 'length of shuffled list should be the same as original');

    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i].id === testConfig[i].id) {
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
});

