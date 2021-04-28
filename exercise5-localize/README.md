# Exercise 5 internationalization (i18n)

We start with a minimalistic app to learn how to utilize the `@angular/localize` module to build our app in different languages.

### Exercise:
1. add an `i18n` tag to each element that needs translation.
2. run `ng extract-i18n --output-path src/locale`
3. edit the translation file manually (for now)   
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
6. you should see two bundles `de` and `en-US` in the `dist` folder 

### Hints:
