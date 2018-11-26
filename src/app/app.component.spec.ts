import { ComponentFactoryResolver } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RunnerService } from './services/runner/runner.service';

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
    const res = app.buildResponse({ 'value': 'one' }, 'testStudy', 'testBlock', 'testAction');

    expect(res.data.response[0]).toBe('one'); // grab first item in list of responses (see Response type)
    expect(res.data.study).toBe('testStudy');
    expect(res.data.block).toBe('testBlock');
    expect(res.data.action).toBe('testAction');
  }));
});
