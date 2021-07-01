import { Component, Input, OnInit } from '@angular/core';
import { Farm } from '../models/farm';

@Component({
  selector: 'app-farm-card',
  templateUrl: './farm-card.component.html',
  styleUrls: ['./farm-card.component.scss']
})
export class FarmCardComponent implements OnInit {

  @Input() farm: Farm;

  constructor() { }

  ngOnInit(): void {
  }

}
