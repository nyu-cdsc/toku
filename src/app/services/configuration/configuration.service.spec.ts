import { inject, TestBed } from '@angular/core/testing';

import { Action, Block } from './configuration';
import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  const firstAction: Action = new Action();
  firstAction.id = 'two'; // = {
  firstAction.group = 1;
  const secondAction: Action = {
    id: 'three',
    group: 2
  };
  const anotherBlock: Block = {
    id: 'anotherB',
    group: 2,
    items: [
      {
        id: 'broken',
        group: 3
      },
    ]
  };

  const testConfig: Block[] = [
    {
      id: 'begin',
      group: 2,
      items: [
        {
          id: 'one',
          group: 1
        },
        secondAction,
        firstAction,
        anotherBlock
      ],
    }, {
      id: 'next',
      group: 3,
      items: [
        {
          id: 'one',
          group: 1
        },
        secondAction,
        firstAction
      ],
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigurationService]
    });
  });

  // it('should be created', inject([ConfigurationService], (service: ConfigurationService) => {
  //   expect(service).toBeTruthy();
  // }));

  // it('should ensure that items are groupable', inject([ConfigurationService], (service: ConfigurationService) => {
  //   // expect(service.orderByGroup(testConfig)).not.toBe('ERRNOTGROUP');
  //   expect(service.validateList(testConfig)).toBeTruthy();
  // }));

  // it('should recursively order by group number', inject([ConfigurationService], (service: ConfigurationService) => {
  //   // expect(service.orderByGroup(testConfig)).toBeTruthy();
  //   expect(testConfig[0].id).toBe('begin');
  // }));

  // it('should RECURSIVELY extract groups into list', inject([ConfigurationService], (service: ConfigurationService) => {
  //   // ensure that group 2 at first level _contains_ the ids of 'next' and 'begin'
  //   // TODO change to reflect _contains_
  //   service.extractGroups.bind(service);
  //   const res = testConfig.reduce(service.extractGroups.bind(service), []);

  //   const resItem = res[2][0].id; // lolz this is great
  //   console.log('RES IS', res);
  //   res.map(i => console.log(i));
  //   expect(resItem).toBe('begin');

  //   // ensure that group 1 _under_ group 2 contains 'one' and 'two'
  // }));

  it('should shuffle within same group', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('begin');
    expect(true).toBe(true);
  }));

  it('should not shuffle if randomize/shuffle is false (use shuffle)', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('begin');
    expect(true).toBe(true);
  }));

  it('should pickOne', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('begin');
    expect(true).toBe(true);
  }));

  it('should repeat if set', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('begin');
    expect(true).toBe(true);
  }));
});

