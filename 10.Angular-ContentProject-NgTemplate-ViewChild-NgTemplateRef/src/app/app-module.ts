import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contentprojection } from './contentprojection/contentprojection';
import { FormsModule } from '@angular/forms';
import { MobileDetails } from './mobile-details/mobile-details';

@NgModule({
  declarations: [
    App,
    Contentprojection,
    MobileDetails
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
  bootstrap: [Contentprojection]
})
export class AppModule { }
