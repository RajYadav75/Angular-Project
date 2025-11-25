import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ngforcomponent } from './ngforcomponent/ngforcomponent';
import { FormsModule } from '@angular/forms';
import { ForDemo } from './for-demo/for-demo';

@NgModule({
  declarations: [
    App,
    Ngforcomponent,
    ForDemo
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
  bootstrap: [Ngforcomponent]
})
export class AppModule { }
