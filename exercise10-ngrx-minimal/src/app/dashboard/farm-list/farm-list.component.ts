import { AppState, selectFarms } from '../../ngrx/farm/farm.selectors';
import { Component, OnInit } from '@angular/core';

import { Farm } from '../../shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { selectFarmAction } from 'src/app/ngrx/farm/farm.actions';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss'],
})
export class FarmListComponent implements OnInit {
  farmList$: Observable<Farm[]>;

  constructor(public readonly store: Store<AppState>) {}

  selectFarm(farm: Farm) {
    this.store.dispatch(selectFarmAction(farm));
  }

  ngOnInit(): void {
    this.farmList$ = this.store.select(selectFarms);
  }
}
