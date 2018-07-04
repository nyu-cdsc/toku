import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureComponent } from './picture.component';

describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO what is it that I actually want done in these?
  //
  // I need them to instantiate, do their thing, exit. so they need parameters
  // for picture that will probably be size, positioning, file, length of time it's displayed for
  // and the other stuff, like repeat? or does that just apply to Action and Block (make Control interface)
  // and also make sure it can take a list of images/videos/whatever? or should all these be very strict, where one
  // does one thing per action. display image. display image. show buttons. etc.
  //
  // that's probably best for now? would there be any actual limitation as a result of that?
  // and on that -- do actions really need subactions? if blocks can be nested as much as necessary to create
  // whatever structure is necessary, why shove that into action? seems conflicting.
  //  the group id would still be relevant - so actions and groups could be ordred as desired
  //
  // block calls block, which has two actions, goes back, calls the rest of the actions/blocks it has in its list
  //
  // so one stimuli per action, -- essentially, one action per action? why not just call the stimuli directly then?
  //
  // no -- an action should be able to have buttons and pictures on the screen at the same time. we should be able
  // to layer stimuli
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
