import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FarmsService} from 'src/app/core/farms.service';
import {Farm} from 'src/app/shared/models/farm';
import {Store} from "@ngrx/store";
import {AppState} from "../../ngrx/farm/farm.selectors";
import {addFarmAction} from "../../ngrx/farm/farm.actions";

@Component({
  selector: 'app-farm-formular',
  templateUrl: './farm-formular.component.html',
  styleUrls: ['./farm-formular.component.scss']
})
export class FarmFormularComponent implements OnInit {

  name: string;
  location: string;
  description: string;

  constructor(private readonly store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  addFarm() {
    this.store.dispatch(addFarmAction({
      name: this.name,
      location: this.location,
      description: this.description
    }))
  }
}
