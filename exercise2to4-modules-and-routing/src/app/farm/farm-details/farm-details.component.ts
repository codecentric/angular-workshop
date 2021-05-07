import {Component, OnInit} from '@angular/core';
import {FarmsService} from 'src/app/core/farms.service';

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
