# Exercise 5 internationalization (i18n)

We start with a minimalistic app to learn how to utilize the `@angular/localize` module to build our app in different languages.

### Exercise:
1. add an `i18n` tag to each element that needs translation.
2. run `ng extract-i18n --output-path src/locale`
3. copy the generated file to
  - create `messages.en.xlf`
  - create `messages.de.xlf`
  - edit `messages.de.xlf` to add translations as `<target>`-tag for each `<source>`-tag (for now we do this manually)
4. edit the configuration in `angular.json`
  - add the following config to the project `exercise5-localize`
   ```
   "i18n": {
     "sourceLocale": "en-US",
     "locales": {
     "de": "src/locale/messages.de.xlf"
     }
   },
   ```
  - set `"localize": true,` in the build options
5. run `ng build --prod`
  - you should see two bundles `de` and `en-US` in the `dist` folder
6. to use the translations during local development, we need to set up build-targets:
  - add these build-targets after the `production` configuration
    ```
      "de": {
        "localize": ["de"]
      },
      "en": {
        "localize": ["en-US"]
      }
    ```
  - add these serve-targets after the `production` configuration
    ```
      "de": {
        "browserTarget": "exercise5-localize:build:de"
      },
      "en": {
        "browserTarget": "exercise5-localize:build:en"
      }
    ```
7. you can now locally start a localized version of your app via
    ```
      ng serve --configuration=de
    ```
   or
    ```
      ng serve --configuration=en
    ```

### Hints:
In the config-file we use `de` as identifier (instead of `de-DE`) to prevent issues with JSON-keys that contain a `-`. 

### Bonus tasks:
Now that your app is running in multiple languages try to experiment a bit
1. Change a text in your template
  - to regenerate the `messages.xlf` file run
    ```
     ng extract-i18n --output-path src/locale
    ``` 
  - Note that the generated id changes each time you change a text
  - define a custom id with the `@@`-prefix to keep generated files consistent
     ```
     <mat-label i18n="@@numberLabel">
     ```
  - try to use the same custom id multiple times. This id is unique and won't generate additional
2. Add a translation that includes plural-forms depending on the selected number (see https://angular.io/guide/i18n#mark-plurals) 

