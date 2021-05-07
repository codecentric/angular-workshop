import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmInfoHeaderComponent } from './farm-info-header/farm-info-header.component';
import { FarmListComponent } from './farm-list/farm-list.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FarmInfoHeaderComponent, FarmListComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
    MatButtonModule
  ],
  exports: [FarmInfoHeaderComponent, FarmListComponent]
})
export class DashboardModule { }
