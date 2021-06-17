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

## Exercise 12 Splitting a form over multiple component

The form from the last execise is quite big and could be split in multiple parts to be more readable. We will keep the definition of the reactive form in the root component and pass it to the childs as input.

### Exercise
1. Create 3 new components for the adress, the saluation + first + last name and for the phonenumber + email
2. Move the matching parts from the HTML to the new components
3. Pass the complete form to the new components for the saluation + first + last name and for the phonenumber + email forms
4. Pass the entry with the matching index from the form array to the adress component


### Hints:
<details><summary>Helper Method to get the entry from formArray with the right type</summary>
  
  ```typescript
    getAdresseAt(index: number): FormGroup {
      return this.getAdressen().at(index) as FormGroup;
    }
  ```
</details>

## Exercise 13 custom validators

Our validator for the phonenumber is really basic and it could be a good idear to make either the phonenumber or the emails required. We will write some custom validators for this purpose

### Exercise
1. For the phonenuber validator we will use Google Libphonenumber. First we add the needed dependencies: ``"google-libphonenumber": "^3.2.21"`` and ``""@types/google-libphonenumber": "^7.4.21"``
2. Create a new custom Validator the uses the google-libphonenumber library
   1. Create the validator function which gets the FormControl as parameter and returns a error-object or null
   2. Use the phoneNumberUtil to verify the given number. Documentation: https://www.npmjs.com/package/google-libphonenumber
3. Use the new validator instead of the pattern matching for the phonennumber
4. Create a validator for the whole form that checks if either phonennumber or email is present

### Hints:
<details><summary>Example for the PhoneNumberValidator</summary>
  
  ```typescript
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

  ```
</details>
<details><summary>Example for the RequiredValidator</summary>
  
  ```typescript
  telefonNrOderEmailValidator(formGroup: FormGroup) {
      const formValue = formGroup.value;
      if (formValue.email || formValue.telefonnr) {
        return null;
      } else {
        return { missingKontaktmoeglichkeit: true };
      }
    }
  ```
</details>
