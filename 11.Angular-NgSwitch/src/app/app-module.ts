import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Switchcomponent } from './switchcomponent/switchcomponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Switchcomponent
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
  bootstrap: [Switchcomponent]
})
export class AppModule { }
