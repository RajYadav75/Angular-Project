import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Eventbinding } from './eventbinding/eventbinding';
import { EventbindingTwo } from './eventbinding-two/eventbinding-two';
import { Keyboardevents } from './keyboardevents/keyboardevents';
import { Emicalculator } from './emicalculator/emicalculator';

@NgModule({
  declarations: [
    App,
    Eventbinding,
    EventbindingTwo,
    Keyboardevents,
    Emicalculator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [Emicalculator]
})
export class AppModule { }
