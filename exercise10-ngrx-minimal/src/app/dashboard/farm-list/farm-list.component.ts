import { Component, OnInit } from '@angular/core';

import { AppState } from '../../ngrx/farm/farm.selectors';
import { Farm } from '../../shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss'],
})
export class FarmListComponent implements OnInit {
  farmList$: Observable<Farm[]>;

  constructor(public readonly store: Store<AppState>) {}

  selectFarm(farm: Farm) {}

  ngOnInit(): void {}
}
