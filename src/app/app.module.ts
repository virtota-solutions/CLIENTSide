import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebService } from './web.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
