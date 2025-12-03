import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { NgstyleStyleBinding } from './ngstyle-style-binding/ngstyle-style-binding';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    NgstyleStyleBinding
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [NgstyleStyleBinding]
})
export class AppModule { }
