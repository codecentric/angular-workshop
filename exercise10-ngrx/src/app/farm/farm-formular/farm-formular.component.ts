import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FarmsService } from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-formular',
  templateUrl: './farm-formular.component.html',
  styleUrls: ['./farm-formular.component.scss']
})
export class FarmFormularComponent implements OnInit {

  name: string;
  location: string;
  description: string;

  constructor(private readonly farmService: FarmsService) {
  }

  ngOnInit(): void {
  }

  addFarm() {
    this.farmService.addFarm(
      {
        name: this.name,
        location: this.location,
        description: this.description
      })
  }
}
