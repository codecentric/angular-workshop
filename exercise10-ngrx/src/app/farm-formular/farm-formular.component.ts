import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Farm} from "../app.component";

@Component({
  selector: 'app-farm-formular',
  templateUrl: './farm-formular.component.html',
  styleUrls: ['./farm-formular.component.scss']
})
export class FarmFormularComponent implements OnInit {

  name: string;
  location: string;
  description: string;

  @Output()
  farmAdded: EventEmitter<Farm> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  addFarm() {
    this.farmAdded.emit(
      {
        name: this.name,
        location: this.location,
        description: this.description
      })
  }
}
