import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ngifdirectives } from './ngifdirectives/ngifdirectives';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    App,
    Ngifdirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [Ngifdirectives]
})
export class AppModule { }
