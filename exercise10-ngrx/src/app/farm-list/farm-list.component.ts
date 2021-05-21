import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm} from "../app.component";

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {
  @Input()
  farms: Farm[] = []

  @Output()
  farmClicked: EventEmitter<Farm> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
