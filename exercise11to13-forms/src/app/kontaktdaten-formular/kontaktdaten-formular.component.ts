import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class KontaktdatenFormularComponent implements OnInit {
  kontaktdatenFormular: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.kontaktdatenFormular = this.formBuilder.group({
      anrede: [null, Validators.required],
      vorname: [null, Validators.maxLength(10)],
      nachname: [
        null,
        [
          Validators.maxLength(10),
          Validators.required,
          Validators.minLength(2),
        ],
      ],
      adressen: this.formBuilder.array([
        this.formBuilder.group({
          strasse: [null, Validators.maxLength(20)],
          hausnummer: [null, Validators.pattern('^[0-9]*$')],
          postleitzahl: [null, Validators.pattern('^[0-9]{5}$')],
          ort: [null, Validators.maxLength(20)],
        }),
      ]),
      email: [null, Validators.email],
      telefonnr: [null, Validators.pattern('^[0-9]*$')],
    });
  }

  addAdresse() {
    const adressen = this.getAdressen();
    adressen.push(
      this.formBuilder.group({
        strasse: [null, Validators.maxLength(20)],
        hausnummer: [null, Validators.pattern('^[0-9]*$')],
        postleitzahl: [null, Validators.pattern('^[0-9]{5}$')],
        ort: [null, Validators.maxLength(20)],
      })
    );
  }

  getAdressen(): FormArray {
    return this.kontaktdatenFormular.get('adressen') as FormArray;
  }

  gesendetesObjekt = '';

  formSenden() {
    this.gesendetesObjekt = JSON.stringify(
      this.kontaktdatenFormular?.value,
      null,
      2
    );
  }
}
