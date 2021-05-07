import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmCardComponent } from './farm-card/farm-card.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    FarmCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    FarmCardComponent
  ]
})
export class SharedModule { }
