import { AppState, selectSelectedFarm } from './ngrx/farm/farm.selectors';
import { Component, OnInit } from '@angular/core';

import { Farm } from './shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedFarm$: Observable<Farm>;

  constructor(public readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedFarm$ = this.store.select(selectSelectedFarm);
  }
}
