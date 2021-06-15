import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export function PhoneNumberValidator(regionCode: string = ''): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    let validNumber = false;
    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
        control.value,
        regionCode
      );
      validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    } catch (e) {}

    return validNumber ? null : { wrongNumber: { value: control.value } };
  };
}

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
    this.kontaktdatenFormular = this.formBuilder.group(
      {
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
        telefonnr: [null, PhoneNumberValidator('DE')],
      },
      { validators: [this.telefonNrOderEmailValidator] }
    );
  }

  telefonNrOderEmailValidator(formGroup: FormGroup) {
    const formValue = formGroup.value;
    if (formValue.email || formValue.telefonnr) {
      return null;
    } else {
      return { missingKontaktmoeglichkeit: true };
    }
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

  getAdresseAt(index: number): FormGroup {
    return this.getAdressen().at(index) as FormGroup;
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
