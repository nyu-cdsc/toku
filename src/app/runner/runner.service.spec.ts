import { inject, TestBed } from '@angular/core/testing';

import { Action, Control } from './configuration';
import { RunnerService } from './runner.service';

describe('RunnerService', () => {
  // NOTE -- new() will be called on all these automatically once it's a yaml config file
  // for now should be done explicitly
  const firstAction: Action = new Action();
  firstAction.id = 'firstA';
  firstAction.stimuli = [];
  firstAction.type = 'action'; // todo this shouldn't be necessary - constructor!

  const miscAction: Action = {
    id: 'miscA',
    type: 'action', // TODO type shouldn't be needed here, just in the list for deserialization - can remove after
    // also applies to Control
    stimuli: []
  };

  // how to new() this? TODO find out!
  const secondAction: Action = {
    type: 'action',
    id: 'secondA',
    stimuli: [],
    children: [
      {
        type: 'action',
        id: 'yetAnotherA'
      },
      miscAction
    ]
  };

  // TODO test arbitrarily adding more lists for further nesting, not just in Actions
  const testConfig: any[] = [
    {
      type: 'action',
      id: 'anotherA', // separate from anotherA defined above, as in a separate group and not a variable
      stimuli: []
    },
    firstAction,
    secondAction,
    {
      type: 'control',
      repeat: 1,
      shuffle: true
    },
    [
      {
        type: 'control',
        repeat: 1,
        shuffle: true
      },
      miscAction,
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
      providers: [ConfigurationService]
    });
  });

  it('should find control object in group', inject([ConfigurationService], (service: ConfigurationService) => {
    const res = service.getControl(testConfig);
    // console.log(res);
    expect(res.repeat).toBe(1);
  }));

  it('should walk through list and apply function at every level', inject([ConfigurationService], (service: ConfigurationService) => {
    // const func = (item) => item.id;
    // const res = service.walkThrough(testConfig, func);
    // console.log(res);
    // expect(res).toBe([]);
  }));

  it('should find control object in group for each level', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(service.getControl(testConfig)).toBeTruthy();
  }));

  it('should shuffle within same group - deep shuffle', inject([ConfigurationService], (service: ConfigurationService) => {
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

  it('should not shuffle if randomize/shuffle is false (use shuffle)', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(true).toBe(true);
  }));

  it('should pickOne', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(true).toBe(true);
  }));

  it('should repeat number of times set', inject([ConfigurationService], (service: ConfigurationService) => {
    // this should generate additional elements in the list
  }));
});

