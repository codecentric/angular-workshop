import {Component} from '@angular/core';
import {Farm} from './shared/models/farm';
import {AppState, selectSelectedFarm} from "./ngrx/farm/farm.selectors";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedFarm$: Observable<Farm>

  constructor(public readonly store: Store<AppState>) {
    this.selectedFarm$ = store.pipe(map(
      state => selectSelectedFarm(state)
    ))
  }


}

