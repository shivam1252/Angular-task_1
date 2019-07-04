import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProjectService} from "./project.service"

import { AppComponent } from './app.component';
import { RtpcomponentComponent } from './rtpcomponent/rtpcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    RtpcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
