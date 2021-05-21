import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FarmsService } from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {
  constructor(public readonly farmService: FarmsService) { }

  ngOnInit(): void {
  }

}
