import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  addFarm(farm) {
    this.farms.push(farm)
  }
}

export interface Farm {
  name: string;
  location: string;
  description: string;
}
