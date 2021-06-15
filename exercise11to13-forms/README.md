# Exercise 11 to 13

## Exercise 11 template driven vs. reactive forms

In this exercise we want to look at the difference of template driven forms and the reactive forms. The goal of this task is to refactor an existing template driven form to a reactive form and add some functionalities.

### Exercise:
1. Remove the FormsModule from the imports in the AppModule and add the ReactiveFormsModule instead
2. Create the structure for the KontaktdatenFormular in the OnInit Method with the FormBuilder
3. Remove the ngModel and name attributes from the form elements in the HTML and use the formGroup/formControlName attributes to bind the HTML to the reactive Form
4. Add the Validators from the HTML to the reactive form and remove the validators from the html
5. Next we want to add the possibility to add multiple adresses
   1. Add a FormArray around the adress form fields
   2. Initialize the FormArray with the first adress
   3. Add a function and a matching button to add new adresses
   4. Use ngFor to render  all of the FormArrayElements


### Hints:
<details><summary>How the form could be build with the FormBuilder</summary>
  
  ```typescript
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
<details><summary>How the add Validators to the form</summary>
  
  ```typescript
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
<details><summary>How to use ngFor with a FormArray</summary>
  
  ```typescript
  <ng-container formArrayName="adressen">
      <div
        *ngFor="let adresse of getAdressen().controls; let i = index"
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
