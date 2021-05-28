import { Component } from '@angular/core';
import { FarmsService } from './core/farms.service';
import { Farm } from './shared/models/farm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public farmService: FarmsService){}

}

