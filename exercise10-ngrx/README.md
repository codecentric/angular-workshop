# Exercise 10 NgrX - Flux Pattern in Angular

There are some different ways how we can develop the state of an Angular application. In Excercise 2 we used a Service to hold our list of farms and provide it to the components. In this exercise we will alter this approach and use a global store instead.

### Exercise:
1. add the dependencies for ngrx `ng add @ngrx/store@latest` and the ngrx devtools `ng add @ngrx/store-devtools@latest` to your project
2. Create the Actions
- First we create a new Folder for out Frams feature in the store `src/app/ngrx/farms`
- Now we create a typescript file for our actions related to the form topic `farm.action.ts`
- We create three Actions: `addFarmAction`, `selectFarmAction`, `deselectFarmAction`
  - <details><summary>Hint: How to create an Action</summary>

    ```typescript
    import {createAction, props} from "@ngrx/store";

    export const actionNameAction = createAction("actionName", props<Payload>())
    ```
</details>


3. Create the Reducer
  - create a typescript file for the reducer `farm.reducer.ts`
  - create an interface for the FarmState
    - <details><summary>Hint: Content of the Farm State</summary>
      The FarmState should contain the array of farms and the selected Farm

      ```typescript
      export interface FarmState {
          farms: Farm[];
          selectedFarm: Farm;
      }
      ```
  </details>

   - create an instance of the State as initial State
   - create the reducer by calling the `createReducer` function with the initial state and all actions which should be handled in the reducer
      - <details><summary>Hint: Structure of the Reducer</summary>
        For each action we call the `on`-function to define how the reducer should react on this specific action.

        It is important to alter the state in an immutable way. So we create new objects rather than altering the existing.

        ```typescript
        const _farmReducer = createReducer(
        initialState,
        on(addFarmAction, (state, props) => {
            return {
            ...state,
            farms: [...state.farms, props]
            }
        }),...

        ```
</details>

- The last step in the reducer is to export a reducer-function which calls our created reducer
  - <details><summary>Hint: How your reducer-function can look like</summary>
    The reducer-function is an wrapper around our created reducer

    ```typescript
    export function farmReducer(state: FarmState | undefined, action: Action) {
        return _farmReducer(state, action)
    }
    ```
  </details>
- The exported function can now be registered in the `App.module.ts`. In the `StoreModule.forRoot`-call we add the reducer in the first parameter like: `    StoreModule.forRoot({farmFeature: farmReducer}, {}),`

4. Create Selectors
- To use the store in a convenient way we define selectors. The selectors are used to access the nested objects in the store directly.
- First we create a farm.selector.ts file
- In the selector we define an `AppState`-Interface which defines how the global state is combined with all reducers
- Next we add the top level feature-Selector for our farm-Feature in the Store
- Based on the feature-selector we add fine grained selectors for the needed fields in the farm-State
  - <details><summary>Hint: How your selector can look like</summary>
  
    ```typescript
    export interface AppState {
    farmFeature: FarmState
    }

    export const selectFarmFeature = (state: AppState) => state.farmFeature
    export const selectFarms = createSelector(selectFarmFeature, (state: FarmState) => state.farms)
    export const selectSelectedFarm = createSelector(selectFarmFeature, (state: FarmState) => state.selectedFarm)
    ```
  </details>

5. Using the Store in our Application
- We can now use the Store to load and alter the state of our Application. We start with loading the list of farms and adding new farms
- Change adding new Farms
  - Remove the `FarmService` from the `FarmFormularComponent` and replace it with an reference to our Store: `private readonly store: Store<AppState>`
  - Change the `addFarm`-Method to dispatch and `addFarmAction` with the correct Payload
- Change loading the Farms
  - Replace the `Farmservice` in the `FarmListComponent`
  - Create a class level variable for our farmList. The Type should be `Observable<Farm[]>`
  - Use our `selectFarms`-Selector to fill the farmList in the constructor
  - <details><summary>Hint: How to use a selector</summary>
  
    ```typescript
    this.farmList$ = store.pipe(map(
        state => selectFarms(state)
    ))
    ```
  </details>

    - Use the farmList in the HTML-Code with an async-pipe

6. Replace the other usages of the FarmService accordingly
7. Delete the FarmService

### Hints:
There are powerful tools to inspect our store and debug it. To do so we need to install the [redux-devtools](https://github.com/reduxjs/redux-devtools) in the browser. Now we can inspect our Store with the browser devtools.
