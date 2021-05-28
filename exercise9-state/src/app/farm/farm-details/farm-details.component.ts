import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {FarmsService} from 'src/app/core/farms.service';
import { Farm } from 'src/app/shared/models/farm';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.scss']
})
export class FarmDetailsComponent implements OnInit {

  farm$: Observable<Farm>;

  constructor(public readonly farmService: FarmsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.farm$ = this.farmService.getFarm(this.route.snapshot.paramMap.get("id"))
  }
}
