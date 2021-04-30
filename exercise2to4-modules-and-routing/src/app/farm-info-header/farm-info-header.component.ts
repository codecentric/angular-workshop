import {Component, Input, OnInit} from '@angular/core';
import {Farm} from "../app.component";

@Component({
  selector: 'app-farm-info-header',
  templateUrl: './farm-info-header.component.html',
  styleUrls: ['./farm-info-header.component.scss']
})
export class FarmInfoHeaderComponent implements OnInit {
  @Input()
  farms: Farm[]

  constructor() { }

  ngOnInit(): void {
  }

  getUniqueLocations(farms: Farm[]){
    return [...new Set(farms.map(farm => farm.location))]
  }
}
