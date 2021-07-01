import { AppState, selectSelectedFarm } from '../../ngrx/farm/farm.selectors';
import { Component, OnInit } from '@angular/core';

import { Farm } from '../../shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { deselectFarmAction } from 'src/app/ngrx/farm/farm.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss'],
})
export class FarmDetailsComponent implements OnInit {
  selectedFarm$: Observable<Farm>;

  constructor(public readonly store: Store<AppState>) {
    this.selectedFarm$ = store.pipe(map((state) => selectSelectedFarm(state)));
  }

  deSelectFarm() {
    this.store.dispatch(deselectFarmAction());
  }

  ngOnInit(): void {}
}
