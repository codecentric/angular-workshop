# Übung 11 bis 13

## Übung 11 vorlagengesteuerte vs. reaktive Formulare

In dieser Übung wollen wir uns den Unterschied zwischen templatedriven forms und reactive forms ansehen. Das Ziel dieser Aufgabe ist es, ein bestehendes template-driven form zu einem reactive form zu refactorn und einige Funktionalitäten hinzuzufügen.

### Übung:
1. Entfernen Sie das FormsModule aus den Importen im AppModule und fügen Sie stattdessen das ReactiveFormsModule hinzu
2. Erstellen Sie die Struktur für das KontaktdatenFormular in der OnInit-Methode mit dem FormBuilder
3. Entfernen Sie die Attribute ngModel und name aus den Formularelementen im HTML und verwenden Sie die Attribute formGroup/formControlName, um das HTML an das reactive form zu binden
4. Fügen Sie die Validatoren aus dem HTML zum reactive form hinzu und entfernen Sie die Validatoren aus dem html
5. Als nächstes wollen wir die Möglichkeit hinzufügen, mehrere Adressen hinzuzufügen
   1. Fügen Sie ein FormArray um die Felder des Adressformulars hinzu
   2. Initialisieren Sie das FormArray mit der ersten Adresse
   3. Fügen Sie eine Funktion und eine passende Schaltfläche zum Hinzufügen neuer Adressen hinzu
   4. Verwenden Sie ngFor, um alle FormArrayElemente zu rendern


### Hints:
<details><summary>Wie das Formular mit dem FormBuilder erstellt werden könnte</summary>
  
  ````Typescript
  this.kontaktdatenFormular = this.formBuilder.group({
        anrede: [null],
        vorname: [null],
        nachname: [null],
        strasse: [null],
        hausnummer: [null],
        postleitzahl: [null],
        ort: [null],
        email: [null],
        telefonnr: [null],
      });
  ```
</details>
<details><summary>Wie die Validatoren zum Formular hinzugefügt werden</summary>
  
  ```Typescript
  nachname: [
    null,
    [
      Validators.maxLength(10),
      Validators.required,
      Validators.minLength(2),
    ],
  ],
  ```
</details>
<details><summary>Wie man ngFor mit einem FormArray verwendet</summary>
  
  ```Typescript
  <ng-container formArrayName="adressen">
      <div
        *ngFor="let adresse von getAdressen().controls; let i = index"
        [formGroupName]="i"
      >
        <h3>Adresse {{ i + 1 }}</h3>
        <mat-form-field appearance="standard">
          <mat-label>Straße</mat-label>
          <input formControlName="strasse" matInput />
        </mat-form-field>
        <mat-form-field appearance="standard">
          <mat-label>Hausnummer</mat-label>
          <input formControlName="hausnummer" matInput />
        </mat-form-field>
        <mat-form-field appearance="standard">
          <mat-label>Postleitzahl</mat-label>
          <input formControlName="postleitzahl" matInput />
        </mat-form-field>
        <mat-form-field appearance="standard">
          <mat-label>Ort</mat-label>
          <input formControlName="ort" matInput />
        </mat-form-field></div
    ></ng-container>
  ```
</details>

## Übung 12 Aufteilung eines Formulars auf mehrere Komponenten

Das Formular aus der letzten Übung ist recht groß und könnte in mehrere Teile aufgeteilt werden, um es besser lesbar zu machen. Wir werden die Definition des reactive form in der Wurzelkomponente belassen und sie an die Kindkomponenten als Input übergeben.

### Übung
1. Erstellen Sie 3 neue Komponenten für die Adresse, die Anrede + Vorname + Nachname und für die Telefonnummer + E-Mail
2. Verschieben Sie die passenden Teile aus dem HTML in die neuen Komponenten
3. Übergeben Sie das komplette Formular an die neuen Komponenten für die Formulare Anrede + Vorname + Nachname und für die Telefonnummer + E-Mail
4. Übergeben Sie den Eintrag mit dem passenden Index aus dem Formular-Array an die Adress-Komponente


### Hinweise:
<details><summary>Hilfsmethode, um den Eintrag aus formArray mit dem richtigen Typ zu holen</summary>
  
  ```Typescript
    getAdresseAt(index: Zahl): FormGroup {
      return this.getAdressen().at(index) as FormGroup;
    }
  ```
</details>

## Übung 13. Benutzerdefinierte Validatoren

Unser Validator für die Rufnummer ist sehr einfach und es wäre eine gute Idee, entweder die Rufnummer oder die E-Mails zur Pflicht zu machen. Wir werden zu diesem Zweck einige benutzerdefinierte Validatoren schreiben

### Übung
1. Für den Telefonnummer-Validator werden wir Google Libphonenumber verwenden. Zuerst fügen wir die benötigten Abhängigkeiten hinzu: ``"google-libphonenumber": "^3.2.21"`` und ``""@types/google-libphonenumber": "^7.4.21"``
2. Erstellen Sie einen neuen benutzerdefinierten Validator, der die google-libphonenumber-Bibliothek verwendet
   1. Erstellen Sie die Validator-Funktion, die das FormControl als Parameter erhält und ein Error-Objekt oder null zurückgibt
   2. Verwenden Sie das phoneNumberUtil, um die angegebene Nummer zu überprüfen. Dokumentation: https://www.npmjs.com/package/google-libphonenumber
3. Verwenden Sie den neuen Validator anstelle des Pattern-Matchings für die Rufnummer
4. Erstellen Sie einen Validator für das gesamte Formular, der prüft, ob entweder die Telefonnummer oder die E-Mail vorhanden ist

### Hinweise:
<details><summary>Beispiel für den PhoneNumberValidator</summary>
  
  ```Typescript
  export function PhoneNumberValidator(regionCode: string = ''): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        null zurückgeben;
      }
      let validNumber = false;
      try {
        const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
          control.value,
          regionCode
    