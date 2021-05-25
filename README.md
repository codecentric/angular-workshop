# Angular Workshop

This repository contains the exercises and code-snippets for the advanced angular workshop.

## Preconditions
 - @angular/cli: 12.0.1 (or higher)
 - node.js: 12.20 (or higher)

The exercises assume that you have `@angular/cli` version 12.0.1 (or higher) installed. To run the exercise-projects you will thus need `node.js` in version 12.20 (or higher).

Note that each project defines its own version of the CLI - this version can be found as `devDependency` in the `package.json` file. Thus upgrading your globally installed CLI won't break the dev-tooling for any existing projects. 

Upgrading the node-version however might introduce breaking changes. In case you need to keep an older version of node installed, you can use the `node version manager (nvm)` to have multiple node versions installed and switch between them on demand.

1. Check which versions of node.js and the Angular CLI you have installed.
    - Node: `node -v`    
    - Angular CLI: `ng version`
2. Install the newest version of the Angular CLI.
   - run 
   ```
   npm uninstall -g @angular-cli
   npm install -g @angular/cli@latest
   ```
   - run `ng version` again to ensure that you have the CLI version 12.0.1 or higher installed
3. Update your Node version (if your installed version is older than 12.20)
   - to use the recent versions of the Angular CLI you need at least version 12.20 of node.
   - you can use `nvm` to have multiple node-versions installed

## Exercises

To start an exercise navigate to the corresponding folder and install the npm dependencies 

> cd exercise{exerciseNumber}-{exerciseName}
> 
> npm install  

The `README.md` file in the exercise-folder contains instructions on what to do to complete the exercise.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project.

