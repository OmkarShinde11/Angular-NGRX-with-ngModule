import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import CounterReducer from './Store/counterReducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from './Store/counterEffect';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({
    counter:CounterReducer
  }), EffectsModule.forRoot([CounterEffect])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
