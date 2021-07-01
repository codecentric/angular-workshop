import { Component, OnInit } from '@angular/core';

import { AppState } from '../../ngrx/farm/farm.selectors';
import { Store } from '@ngrx/store';
import { addFarmAction } from 'src/app/ngrx/farm/farm.actions';

@Component({
  selector: 'app-farm-formular',
  templateUrl: './farm-formular.component.html',
  styleUrls: ['./farm-formular.component.scss'],
})
export class FarmFormularComponent implements OnInit {
  name: string;
  location: string;
  description: string;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {}

  addFarm() {
    this.store.dispatch(
      addFarmAction({
        name: this.name,
        location: this.location,
        description: this.description,
      })
    );
  }
}
