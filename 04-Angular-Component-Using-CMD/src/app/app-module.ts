import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NetflixHeader } from './component/netflix-header/netflix-header';
import { NetflixMain } from './component/netflix-main/netflix-main';
import { NetflixIndex } from './component/netflix-index/netflix-index';
import { NetflixRegister } from './component/netflix-register/netflix-register';

@NgModule({
  declarations: [
    NetflixHeader,
    NetflixMain,
    NetflixIndex,
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
  bootstrap: [NetflixIndex]
})
export class AppModule { }
