import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FarmCardModule} from "./farm-card/farm-card.module";
import {FarmCardComponent} from "./farm-card/farm-card.component";

@NgModule({
  imports: [
    CommonModule,
    FarmCardModule
  ],
  exports: [
    FarmCardComponent
  ]
})
export class SharedModule {
}
