import {Component, OnInit} from '@angular/core';
import {FarmsService} from 'src/app/core/farms.service';
import {Store} from "@ngrx/store";
import {AppState, selectFarms, selectSelectedFarm} from "../../ngrx/farm/farm.selectors";
import {Observable} from "rxjs";
import {Farm} from "../../shared/models/farm";
import {map} from "rxjs/operators";
import {deselectFarmAction, selectFarmAction} from "../../ngrx/farm/farm.actions";

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {

  selectedFarm$: Observable<Farm>

  constructor(public readonly store: Store<AppState>) {
    this.selectedFarm$ = store.pipe(map(
      state => selectSelectedFarm(state)
    ))
  }

  deSelectFarm() {
    this.store.dispatch(deselectFarmAction())
  }

  ngOnInit(): void {
  }
}
