import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureComponent } from './picture.component';

describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureComponent]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should take an optional button component/stimuli for response - composite component', () => {
    expect(true).toBe(true);
  });
  it('should click supplied coordinate for "yes"', () => {
    // todo web test with click
    expect(true).toBe(true);
  });
  it('should scale image to defined size', () => {
    expect(true).toBe(true);
  });
  it('should send done event on finish', () => {
    // todo rather than event directly to parent, just hit a shared store
    expect(true).toBe(true);
  });
});
