import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Decrement, Increment, Reset} from './action/action';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));

  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

  ngAfterViewInit(): void {
  }
}
