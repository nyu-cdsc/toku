import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoundComponent } from './sound/sound.component';
import { MovieComponent } from './movie/movie.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundComponent,
    MovieComponent,
    ConditionalComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
