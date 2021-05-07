import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FarmCardModule} from "./farm-card/farm-card.module";
import {FarmCardComponent} from "./farm-card/farm-card.component";
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from "./breadcrumb/breadcrumb.module";

@NgModule({
  imports: [
    CommonModule,
    FarmCardModule,
    BreadcrumbModule
  ],
  exports: [
    FarmCardComponent,
    BreadcrumbComponent
  ],
})
export class SharedModule {
}
