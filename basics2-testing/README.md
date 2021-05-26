# Basics 2 - testing

We use the project setup that we created in the first exercise (with just a bit more added complexity) to take a look at unittests in Angular

### Exercise:
1. run the tests via `ng test` or `npm run test`
2. Write unittests for the `NumberService` that test the following:
   - a generated number is of type number
   - generating a number increases the length of the `numberHistory` 
   - a generated number is appended to the `numberHistory`
   - the behaviour of `getPreviousNumber()` if the `numberHistory` is empty 
   - after generating three random numbers `getPreviousNumber()` returns the second generated number.  
3. Take a look at the `TestBed`-setup for the `BaseComponent` and
   - test that the `number` is initialized when the component is created  
   - provide a mock-implementation for the `NumberService`
   - test that `getRandomNumber()` is called when the component is initialized
   - test that `getRandomNumber()` is called when the user clicks on the button
   - test that the generated Number is actually rendered by checking the `nativeElement`
   - note that the `ChildComponent` is not getting rendered in the test since it is not registered in the `TestBed`-setup
4. make `number` an `@Input` property of the `ChildComponent` and pass down the generated number from the `BaseComponent`
5. add an `@Output` property to the `ChildComponent` to generate a new random number when the button is clicked
6. Add a `ChildComponentMock` to the tests of the `BaseComponent`
7. The tests for `ChildComponent` are currently disabled via `xdescribe()`
   - enable the tests and check why they fail
   - fix the test-setup for `ChildComponent`
8. Write a parameterized test for the `ModifyPipe`
9. check the code-coverage of your tests with `ng test --no-watch --code-coverage`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
