import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoundComponent } from './stimuli/sound/sound.component';
import { MovieComponent } from './stimuli/movie/movie.component';
import { ConditionalComponent } from './stimuli/conditional/conditional.component';
import { PictureComponent } from './stimuli/picture/picture.component';

import { ConfigurationService } from './services/configuration/configuration.service';
import { ResponseService } from './services/response/response.service';
import { StimloaderDirective } from './stimloader.directive';

@NgModule({
  declarations: [
    AppComponent,
    SoundComponent,
    MovieComponent,
    ConditionalComponent,
    PictureComponent,
    // ConfigurationService,
    // ResponseService,
    StimloaderDirective
  ],
  entryComponents: [
    PictureComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConfigurationService, ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
