import { ComponentFactoryResolver } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RunnerService } from './services/runner/runner.service';
import { AreaComponent } from './components/responders/area/area.component';
import { MovieComponent } from './components/stimuli/movie/movie.component';
import { PictureComponent } from './components/stimuli/picture/picture.component';
import { FrameComponent } from './components/frame/frame.component';

import { environment } from '../environments/environment';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'environment', useValue: environment }],
      declarations: [AppComponent, FrameComponent, PictureComponent, MovieComponent, AreaComponent]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PictureComponent, MovieComponent, AreaComponent],
      }
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('nextAction', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  }));
  it('studyEnded', async(() => {
  }));
  it('buildStimuli', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('p').textContent).toContain(
    //   'movie works!'
    // );
  }));
  it('buildResponse', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const res = app.buildResponse({ 'value': 'one' }, 'testBlock', 'testAction');

    expect(res.data.get('response')).toBe('one'); // grab first item in list of responses (see Response type)
    expect(res.data.get('block')).toBe('testBlock');
    expect(res.data.get('action')).toBe('testAction');
  }));
});
