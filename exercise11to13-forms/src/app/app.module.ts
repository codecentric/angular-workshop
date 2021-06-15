import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { KontaktdatenFormularComponent } from './kontaktdaten-formular/kontaktdaten-formular.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFormularComponent } from './kontaktdaten-formular/name-formular/name-formular.component';
import { AdresseFormularComponent } from './kontaktdaten-formular/adresse-formular/adresse-formular.component';
import { KontaktmoeglichkeitenFormularComponent } from './kontaktdaten-formular/kontaktmoeglichkeiten-formular/kontaktmoeglichkeiten-formular.component';

@NgModule({
  declarations: [AppComponent, KontaktdatenFormularComponent, NameFormularComponent, AdresseFormularComponent, KontaktmoeglichkeitenFormularComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
