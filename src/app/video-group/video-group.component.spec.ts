import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGroupComponent } from './video-group.component';

describe('VideoGroupComponent', () => {
  let component: VideoGroupComponent;
  let fixture: ComponentFixture<VideoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
