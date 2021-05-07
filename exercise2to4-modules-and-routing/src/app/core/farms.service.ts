import { Injectable } from '@angular/core';
import { Farm } from '../shared/models/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  farms: Farm[] = [
    {
      name: "Rinderhof",
      location: "Essen",
      description: "Dies ist ein Bauernhof, welcher für die schönsten Rinder in ganz Essen bekannt ist"
    },
    {
      name: "Schweinezucht",
      location: "Dortmund",
      description: "Hat einen überdurchschnittlich hohen Schweinefutterverbrauch"
    }
  ]

  selectedFarm: Farm;

  addFarm(farm) {
    this.farms.push(farm)
  }

  selectFarm(farm) {
    this.selectedFarm = farm;
  }

  constructor() { }
}
