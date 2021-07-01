# Exercise10NgrxMinimal

In this Exercise we want to take a look at the NgRx-Store. We will implement some Actions, Reducers and Selectors and use them in our Application. The definitions for NgRx will be created in the NgRx-Folder. The matching files are already there.

### Exercise:
1. Create the Actions
- We create three Actions: `addFarmAction`, `selectFarmAction`, `deselectFarmAction`
  - <details><summary>Hint: How to create an Action</summary>

    ```typescript
    import {createAction, props} from "@ngrx/store";

    export const actionNameAction = createAction("actionName", props<Payload>())
    ```
</details>


1. Create the Reducer
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

1. Create Selectors
- In the Selectors-File we have a feature-selector for our farms state
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

1. Using the Store in our Application
- We can now use the Store to load and alter the state of our Application. We start with loading the list of farms and adding new farms
- Change adding new Farms
  - `FarmFormularComponent`: Change the `addFarm`-Method to dispatch and `addFarmAction` with the correct Payload
- Change loading the Farms
  - `FarmListComponent`: Use our `selectFarms`-Selector to fill the farmList in the constructor
  - <details><summary>Hint: How to use a selector</summary>
  
    ```typescript
    this.farmList$ = store.pipe(map(
        state => selectFarms(state)
    ))
    ```
  </details>

    - Use the farmList in the HTML-Code with an async-pipe

1. Replace the other usages of the FarmService accordingly
    - `FarmListComponent`: Dispatch the SelectFarmAction
    -  `FarmInfoHeaderCompontn`:  Use our `selectFarms`-Selector to fill the farmList in the constructor
    -  `FarmDetailsComponent`: :  Use our `selectSelectedFarms`-Selector to fill the farmList in the constructor, add the `deselectFarm` Action to the matching function
    - `AppComponent`: :  Use our `selectSelectedFarms`-Selector to fill the farmList in the constructor
2. Delete the FarmService

Next we can play around a little with the Devtools
1. Install the [redux-devtools](https://github.com/reduxjs/redux-devtools) for your browser
2. Open the Application
3. Open the Browser Devtools and switch to the redux tab. We should se the inital event and state.
4. Play a little around in the Application to produce some events
5. Klick on the actions to view the payload and the state that gets produced
6. Export the state - Reload the Page - and Import it again
7. You can jump back to the state of a specific action
8. You can skip on older action and see how the state changes


### Hints:
There are powerful tools to inspect our store and debug it. To do so we need to install the [redux-devtools](https://github.com/reduxjs/redux-devtools) in the browser. Now we can inspect our Store with the browser devtools.
