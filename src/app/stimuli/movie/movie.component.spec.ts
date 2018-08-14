import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should freeze in place/remain on last frame OR first frame after done, if option set', () => {
    // expect(component).toBeTruthy();
  });
  it('should be able to have one long video that is broken up by other stimuli like button at defined freeze-points', () => {
    // expect(component).toBeTruthy();
    // todo come up with good implementation for this
  });
  it('should take an optional button component/stimuli for response - composite component', () => {
    // expect(component).toBeTruthy();
  });
});
