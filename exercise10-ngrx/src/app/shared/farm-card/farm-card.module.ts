import {NgModule} from '@angular/core';
import {FarmCardComponent} from "./farm-card.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [FarmCardComponent],
  imports: [
    MatCardModule
  ],
  exports: [
    FarmCardComponent,
  ]
})
export class FarmCardModule { }
