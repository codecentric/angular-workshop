import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FarmDetailsComponent} from './farm-details/farm-details.component';
import {FarmFormularComponent} from './farm-formular/farm-formular.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from '../shared/shared.module';
import {FarmRoutingModule} from './farm-routing.module';
import {FarmInfoHeaderComponent} from "./farm-info-header/farm-info-header.component";
import {FarmListComponent} from "./farm-list/farm-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { FarmHomeComponent } from './farm-home/farm-home.component';

@NgModule({
  declarations: [FarmDetailsComponent, FarmFormularComponent, FarmInfoHeaderComponent, FarmListComponent, DashboardComponent, FarmHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    FarmRoutingModule,
  ],
  exports: [
    FarmFormularComponent,
    FarmDetailsComponent
  ]
})
export class FarmModule { }
