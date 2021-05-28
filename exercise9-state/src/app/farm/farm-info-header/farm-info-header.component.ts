import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { FarmsService } from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-info-header',
  templateUrl: './farm-info-header.component.html',
  styleUrls: ['./farm-info-header.component.scss']
})
export class FarmInfoHeaderComponent implements OnInit {

  farms$: Observable<Farm[]>;

  constructor(private readonly farmService: FarmsService) { }

  ngOnInit(): void {
    this.farms$ = this.farmService.getFarms();
  }

  getUniqueLocations(farms: Farm[]){
    return [...new Set(farms.map(farm => farm.location))]
  }
}
