import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ButtonComponent } from './components/responders/button/button.component';
import { AreaComponent } from './components/responders/area/area.component';

import { SoundComponent } from './components/stimuli/sound/sound.component';
import { MovieComponent } from './components/stimuli/movie/movie.component';
import { PictureComponent } from './components/stimuli/picture/picture.component';
import { FormComponent } from './components/stimuli/form/form.component';
import { StimuliService } from './components/stimuli/stimuli.service';
// todo perhaps this ^ is a signal that stimuli should become a module? components + service?

import { FrameComponent } from './components/frame/frame.component';

import { ResponseService } from './services/response/response2.service';
import { RunnerService } from './services/runner/runner.service';
import { ParserService } from './services/parser/parser.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AreaComponent,
    SoundComponent,
    MovieComponent,
    PictureComponent,
    FormComponent,
    FrameComponent
  ],
  entryComponents: [
    PictureComponent,
    MovieComponent,
    SoundComponent,
    ButtonComponent,
    AreaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ResponseService,
    RunnerService,
    StimuliService,
    ParserService,
    { provide: 'environment', useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
