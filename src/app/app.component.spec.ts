import { ComponentFactoryResolver } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RunnerService } from './services/runner/runner.service';
import { PictureComponent } from './components/stimuli/picture/picture.component';
import { MovieComponent } from './components/stimuli/movie/movie.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [AppComponent]
    // }).overrideModule(BrowserDynamicTestingModule, {
    //   set: {
    //     entryComponents: [PictureComponent, MovieComponent],
    //   }
    // }).compileComponents();
    TestBed.configureTestingModule({
      // declarations: [AppComponent],
      imports: [AppModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('new');
  }));

  it('should render "movie works!" in p tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('p').textContent).toContain(
    //   'movie works!'
    // );
  }));
  it('should -- SIMPLER -- continue to next action upon Complete status being received', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  }));
  it('nextAction', async(() => {
  }));
  it('studyEnded', async(() => {
  }));
  it('buildStimuli', async(() => {
  }));
});
