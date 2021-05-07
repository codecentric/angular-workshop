import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FarmsService } from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {
  constructor(public readonly farmService: FarmsService) { }

  ngOnInit(): void {
  }
}
