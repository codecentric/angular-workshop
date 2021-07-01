import { Component, OnInit } from '@angular/core';

import { AppState } from '../../ngrx/farm/farm.selectors';
import { Store } from '@ngrx/store';

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

  addFarm() {}
}
