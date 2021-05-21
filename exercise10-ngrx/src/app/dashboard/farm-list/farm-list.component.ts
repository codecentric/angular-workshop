import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, selectFarms} from "../../ngrx/farm/farm.selectors";
import {Observable} from "rxjs";
import {Farm} from "../../shared/models/farm";
import {map} from "rxjs/operators";
import {selectFarmAction} from "../../ngrx/farm/farm.actions";

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {
  farmList$: Observable<Farm[]>

  constructor(public readonly store: Store<AppState>) {
    this.farmList$ = store.pipe(map(
      state => selectFarms(state)
    ))
  }

  selectFarm(farm: Farm) {
    this.store.dispatch(selectFarmAction(farm))
  }

  ngOnInit(): void {
  }

}
