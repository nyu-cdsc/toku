import { inject, TestBed } from '@angular/core/testing';

import { Action, Control } from './configuration';
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
  }

  // TODO test arbitrarily adding more lists for further nesting, not just in Actions
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
        repeat: 0,
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
    // console.log(res);
    expect(res.repeat).toBe(1);
  }));

  it('should shuffle within same group - deep shuffle', inject([RunnerService], (service: RunnerService) => {
    // const compare = [];
    // const firstPre = { pre: testConfig.indexOf(firstAction) };
    // const secondPre = { pre: testConfig.indexOf(secondAction) };

    // // TODO redo shuffle/deepshuffle to return a new list instead of shuffling existing!
    // service.deepShuffle(testConfig);

    // compare['first']['post'] = testConfig.indexOf(firstAction);
    // compare['second']['post'] = testConfig.indexOf(secondAction);

    // TODO JUST USE Map()

    // // console.log(compare);

    // const res = compare.every(item => {
    //   if (item['pre'] === item['post']) {
    //     return true;
    //   }
    //   return false;
    // });

    // ^TODO get the walkthrough helper working with this, and go through list before/after comparing indexOf values

    // expect(res).toBe(false, compare);
  }));

  it('should not shuffle if randomize/shuffle is false (use shuffle)', inject([RunnerService], (service: RunnerService) => {
    // expect(true).toBe(true);
  }));

  it('should pickOne', inject([RunnerService], (service: RunnerService) => {
    expect(true).toBe(true);
  }));

  it('should repeat number of times set', inject([RunnerService], (service: RunnerService) => {
    const res = service.repeatList(testConfig, testControl.repeat);
    
    // if repeat is 0, length is equivalent to origLength * (1 + 0) (e.g. it's the same, and 1+1 if repeat doubles it, etc..)
    expect(res.length).toBe(testConfig.length * (1 + testControl.repeat));
  }));
});

