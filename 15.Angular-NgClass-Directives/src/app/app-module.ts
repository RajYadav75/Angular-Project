import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Ngclassforcss } from './ngclassforcss/ngclassforcss';
import { Ngclassusingstringreference } from './ngclassusingstringreference/ngclassusingstringreference';
import { Ngclassusingarrayreference } from './ngclassusingarrayreference/ngclassusingarrayreference';
import { FormsModule } from '@angular/forms';
import { Ngclassusingobjectreference } from './ngclassusingobjectreference/ngclassusingobjectreference';
import { Ngclassbinding } from './ngclassbinding/ngclassbinding';
import { Userformngclass } from './userformngclass/userformngclass';

@NgModule({
  declarations: [
    App,
    Ngclassforcss,
    Ngclassusingstringreference,
    Ngclassusingarrayreference,
    Ngclassusingobjectreference,
    Ngclassbinding,
    Userformngclass
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [Ngclassbinding]
})
export class AppModule { }
