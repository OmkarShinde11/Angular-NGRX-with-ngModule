import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
// import { increment } from '../Store/counterAction';
import {Increment,Decrement}  from '../Store/counterAction';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private counterService: CounterService,private store:Store) {}

  increment() {
    // this.counterService.increment();
    // this.store.dispatch(increment({value:2}));  // increment() is a action which is called by dispatch in component.
    this.store.dispatch(new Increment({value:1}))
  }

  decrement() {
    // this.counterService.decrement();
    this.store.dispatch(new Decrement({value:1}))
  }

}
