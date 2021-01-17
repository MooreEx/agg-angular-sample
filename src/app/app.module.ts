import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './ui/material/material.module';

import { AppComponent } from './app.component';
import { TestWorkModule } from '@app/test-work/test-work.module';
import { HudModule } from '@app/hud/hud.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    TestWorkModule,
    HudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
