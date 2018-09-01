import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoundComponent } from './stimuli/sound/sound.component';
import { MovieComponent } from './stimuli/movie/movie.component';
import { ConditionalComponent } from './stimuli/conditional/conditional.component';
import { PictureComponent } from './stimuli/picture/picture.component';
import { ButtonComponent } from './stimuli/button/button.component';

import { RunnerService } from './runner/runner.service';
import { StimuliService } from './stimuli/stimuli.service';
import { ResponseService } from './response/response.service';
import { StimloaderDirective } from './stimloader.directive';

@NgModule({
  declarations: [
    AppComponent,
    SoundComponent,
    MovieComponent,
    ConditionalComponent,
    PictureComponent,
    ButtonComponent,
    StimloaderDirective
  ],
  entryComponents: [
    PictureComponent,
    MovieComponent,
    SoundComponent,
    ButtonComponent,
    ConditionalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService, RunnerService, StimuliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
