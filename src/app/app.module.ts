import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AgeComponent } from './age/age.component';
import { StartPageComponent } from './startpage/startpage.component';
import { StimuliComponent } from './stimuli/stimuli.component';
import { ResponseService } from './response/response.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AgeComponent,
    StartPageComponent,
    StimuliComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
