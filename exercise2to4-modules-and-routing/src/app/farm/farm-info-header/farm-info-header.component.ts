import {Component, Input, OnInit} from '@angular/core';
import { FarmsService } from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-info-header',
  templateUrl: './farm-info-header.component.html',
  styleUrls: ['./farm-info-header.component.scss']
})
export class FarmInfoHeaderComponent implements OnInit {
  constructor(public readonly farmService: FarmsService) { }

  ngOnInit(): void {
  }

  getUniqueLocations(farms: Farm[]){
    return [...new Set(farms.map(farm => farm.location))]
  }
}
