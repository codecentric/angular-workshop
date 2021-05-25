# Basics 1 - project setup

We will use the angular CLI to setup a new project (and check that our tooling is working as expected)

### Exercise:
1. create a new project and start it
    ```
    cd basics1-project-setup
    
    ng new test-app
    cd test-app
    ng serve
    ```
2. open `http://localhost:4200/` in a browser
  
3. create a new component, pipe and service in the app-folder
    ```
    cd src/app
    
    ng generate component test
    ng generate service random
    ng generate pipe modify
    ```
   
4. the CLI already registered everything in the `AppModule`. So there is no more setup needed to use the generated elements:
    - write a `getRandomNumber()` method in the `RandomService`
    - let the `ModifyPipe` add 2 to the `value` 
    - Use the `TestComponent` to fetch a random number from the service and apply the `ModifyPipe` (twice)      

### Tooling

- You can add ESLint to a new project by running
    ```
    ng add @angular-eslint/schematics
    ```

- You can add Prettier.js to a project by running
    ```
    npm install prettier -D
    ```

  and creating a `.prettierrc` file with the following content. Note that you probably want to setup either a plugin for your IDE or commit-hooks as well.

    ```
    {
      “printWidth”: 120,
      “singleQuote”: true,
    }
    ```


### Hints:
- if you have Chrome installed, take a look at the [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
  

- Most IDEs also offer integration for the Angular CLI. Take a second to check which support, hotkeys or plugins your favorite IDE offers for Angular.
   - IntelliJ/ Webstorm: [Angular Plugin](https://plugins.jetbrains.com/plugin/6971-angular-and-angularjs) 
   - Visual Studio Code: [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials&WT.mc_id=javascript-0000-jopapa)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
