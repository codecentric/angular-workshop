import { Component, OnInit } from '@angular/core';

enum Anrede {
  HERR,
  FRAU,
  DIVERS,
}

interface Kontaktdaten {
  anrede?: Anrede;
  vorname?: string;
  nachname?: string;
  strasse?: string;
  hausnummer?: string;
  postleitzahl?: string;
  ort?: string;
  email?: string;
  telefonnr?: string;
}

@Component({
  selector: 'app-kontaktdaten-formular',
  templateUrl: './kontaktdaten-formular.component.html',
  styleUrls: ['./kontaktdaten-formular.component.scss'],
})
export class KontaktdatenFormularComponent {
  kontaktdaten: Kontaktdaten = {};

  gesendetesObjekt = '';

  formSenden() {
    this.gesendetesObjekt = JSON.stringify(this.kontaktdaten, null, 2);
  }
}
