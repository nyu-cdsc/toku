import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { PictureComponent } from './picture.component';
import { AreaComponent } from '../../responders/area/area.component';

describe('PictureComponent', () => {
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureComponent, AreaComponent],
      // imports: [AppModule]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PictureComponent, AreaComponent] // , MovieComponent],
      }
    });

    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
    component.parameters = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should take an optional button component/stimuli for response - composite component', () => {
    // expect(true).toBe(true);
  });
  it('should click supplied coordinate for "yes"', () => {
    // todo web test with click
    // expect(true).toBe(true);
  });
  it('should scale image to defined size', () => {
    // expect(true).toBe(true);
  });
  it('should send done event on finish', () => {
    // todo rather than event directly to parent, just hit a shared store
    // expect(true).toBe(true);
  });
});
