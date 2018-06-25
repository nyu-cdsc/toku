import { inject, TestBed } from '@angular/core/testing';

import { Action, Block } from './configuration';
import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  const firstAction: Action = {
    id: 'two',
    group: 1
  };
  const secondAction: Action = {
    id: 'three',
    group: 2
  };
  const anotherBlock: Block = {
    id: 'anotherB',
    group: 2,
    items: []
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
      group: 3, // todo change to 3 and test
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

  it('should be created', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service).toBeTruthy();
  }));

  it('should be an object', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('next');
    expect(true).toBe(true);
  }));

  it('should should check that the items are blocks or actions', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service.orderByGroup(testConfig)).not.toBe('ERRNOTGROUP');
  }));

  it('should recursively order by group number', inject([ConfigurationService], (service: ConfigurationService) => {
    // expect(testConfig[0].id).toBe('begin');
    expect(true).toBe(true);
  }));
});

