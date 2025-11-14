import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { NetflixRegister } from './components/ManuallyAddingComponentUsingInlineTechnique/netflix-register.component';

@NgModule({
  declarations: [
    NetflixRegister
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [NetflixRegister]
})
export class AppModule { }
