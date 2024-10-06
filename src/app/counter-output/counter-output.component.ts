import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { doubleCounter, selectcounter } from '../Store/counterSelector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter = 0;
  counterServiceSub?: Subscription;
  count$:Observable<number>;
  doubleCounter$:Observable<number>;

  constructor(private counterService:CounterService, private store:Store<{counter:number}>) {
    this.count$=this.store.select(selectcounter); // counter is the string which is used in app.module.ts for import the reducer.
    this.doubleCounter$=this.store.select(doubleCounter);
  }


  ngOnInit(): void {
    // this.counterServiceSub = this.counterService.counterChanged.subscribe(
    //   (newVal) => (this.counter = newVal)
    // );
  }

  ngOnDestroy(): void {
    // if (this.counterServiceSub) {
    //   this.counterServiceSub.unsubscribe();
    // }
  }
}
