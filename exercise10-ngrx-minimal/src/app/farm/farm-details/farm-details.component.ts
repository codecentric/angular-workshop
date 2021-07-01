import { Component, OnInit } from '@angular/core';

import { AppState } from '../../ngrx/farm/farm.selectors';
import { Farm } from '../../shared/models/farm';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss'],
})
export class FarmDetailsComponent implements OnInit {
  selectedFarm$: Observable<Farm>;

  constructor(public readonly store: Store<AppState>) {}

  deSelectFarm() {}

  ngOnInit(): void {}
}
