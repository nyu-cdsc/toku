import { ComponentFactoryResolver } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ConfigurationService } from './services/configuration/configuration.service';
import { PictureComponent } from './stimuli/picture/picture.component';
import { MovieComponent } from './stimuli/movie/movie.component';
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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('new');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to new!'
    );
  }));

  it('should have heroes when HeroListComponent created', () => {
    // const expectedConfig = [{name: 'A'}, {name: 'B'}]
    // const mockService = <ConfigurationService> {config: () => expectedConfig }

    // Pass the mock to the constructor as the Angular injector would

    // not mocking - but try that later? ..
    // const component = new AppComponent(new ComponentFactoryResolver, new ConfigurationService());
    // // todo figure out how to make this work with injectables so I'm not doing it all myself..

    // expect(component.config.length).toEqual(2);
  });

  it('should render "picture works!" in p tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'picture works!'
    );
  }));
});
