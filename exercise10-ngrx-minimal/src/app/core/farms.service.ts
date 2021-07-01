import {Injectable} from '@angular/core';
import {Farm} from '../shared/models/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private farms: Farm[] = [
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

  private selectedFarm: Farm;

  getFarms() {
    return this.farms
  }

  addFarm(farm) {
    this.farms.push(farm)
  }

  selectFarm(farm) {
    this.selectedFarm = farm;
  }

  deselectFarm(){
    this.selectedFarm = null;
  }

  getSelectedFarm() {
    return this.selectedFarm
  }
}
