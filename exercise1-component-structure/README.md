# Exercise 1 - component structure

Let's take a look at the LineChart example from `ng2-charts`

https://valor-software.com/ng2-charts/#/LineChart

This example consists of one component which 
 - generates random data (logic)
 - displays data in a chart (presentation)
 - displays data in a table (presentation)

### Exercise:
 1. move the chart and chart-config to a presentational component 
 2. add a click event to the chart which triggers the `randomize` method
 3. move the table to a presentational component
 4. review your components and note how this refactoring reduced the cognitive complexity

### Hints:
Keep the `randomize()` method in `app.component.ts`

Whenever the data changes, you need to call `chart.update()` to render the new data. Add an `updateChart()` method to your `ChartComponent` and call it from within the `randomize()` function in `app.component.ts`. You can do this by referencing `ChartComponent` as `ViewChild`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
