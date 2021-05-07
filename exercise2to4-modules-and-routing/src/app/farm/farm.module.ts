import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { FarmFormularComponent } from './farm-formular/farm-formular.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FarmDetailsComponent, FarmFormularComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    FarmFormularComponent,
    FarmDetailsComponent
  ]
})
export class FarmModule { }
