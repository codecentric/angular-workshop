import { AppState, selectFarms } from 'src/app/ngrx/farm/farm.selectors';
import { Component, Input, OnInit } from '@angular/core';

import { Farm } from 'src/app/shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-farm-info-header',
  templateUrl: './farm-info-header.component.html',
  styleUrls: ['./farm-info-header.component.scss'],
})
export class FarmInfoHeaderComponent implements OnInit {
  farmList$: Observable<Farm[]>;

  constructor(public readonly store: Store<AppState>) {
    this.farmList$ = store.pipe(map((state) => selectFarms(state)));
  }
  ngOnInit(): void {}

  getUniqueLocations(farms: Farm[]) {
    return [...new Set(farms.map((farm) => farm.location))];
  }
}
