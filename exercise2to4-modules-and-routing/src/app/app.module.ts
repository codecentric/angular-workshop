import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FarmFormularComponent } from './farm-formular/farm-formular.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmInfoHeaderComponent } from './farm-info-header/farm-info-header.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmFormularComponent,
    FarmListComponent,
    FarmInfoHeaderComponent,
    FarmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
