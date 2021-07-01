import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmInfoHeaderComponent } from './farm-info-header/farm-info-header.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FarmInfoHeaderComponent, FarmListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FarmInfoHeaderComponent, FarmListComponent]
})
export class DashboardModule { }
