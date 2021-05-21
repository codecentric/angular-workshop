import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm} from "../app.component";

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {
  @Input()
  farm: Farm

  @Output()
  backToDashboard: EventEmitter<void> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
}
