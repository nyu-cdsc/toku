import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StimuliComponent } from './stimuli.component';

describe('StimuliComponent', () => {
  let component: StimuliComponent;
  let fixture: ComponentFixture<StimuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StimuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StimuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
