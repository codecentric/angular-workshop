# Übung 10 NgrX - Flux-Pattern in Angular

Es gibt einige verschiedene Möglichkeiten, wie wir den Zustand einer Angular-Anwendung abbilden können. In Übung 2 haben wir einen Service verwendet, um unsere Liste von Farmen zu halten und sie den Komponenten zur Verfügung zu stellen. In dieser Übung werden wir diesen Ansatz abändern und stattdessen einen globalen Speicher verwenden.

### Übung:
1. Fügen Sie die Abhängigkeiten für ngrx `ng add @ngrx/store@latest` und die ngrx devtools `ng add @ngrx/store-devtools@latest` zu Ihrem Projekt hinzu.
2. Erstellen Sie die Actions
- Zuerst legen wir einen neuen Ordner für unsere Frams-Feature im Store `src/app/ngrx/farms` an
- Nun erstellen wir eine Typescript-Datei für unsere Actions, die sich auf das Formular-Topic beziehen `farm.action.ts`
- Wir erstellen drei Actions: `addFarmAction`, `selectFarmAction`, `deselectFarmAction`
  - <details><summary>Hinweis: Wie man eine Aktion erstellt</summary>

    ```Typescript
    importieren Sie {createAction, props} aus "@ngrx/store";

    export const actionNameAction = createAction("actionName", props<Payload>())
    ```
</details>


3. Den Reducer erstellen
  - Erstellen Sie eine Typescript-Datei für den Reducer `farm.reducer.ts`
  - Erstellen Sie ein Interface für den FarmState
    - <details><summary>Hinweis: Inhalt des FarmState</summary>
      Der FarmState sollte das Array der Farmen und die ausgewählte Farm enthalten

      ````Typescript
      export interface FarmState {
          Farmen: Farm[];
          selectedFarm: Farm;
      }
      ```
  </details>

   - Erzeugen Sie eine Instanz des State als initialen State
   - erzeugen Sie den Reducer durch Aufruf der Funktion `createReducer` mit dem initialen State und allen Actions, die im Reducer behandelt werden sollen
      - <details><summary>Hinweis: Aufbau des Reducers</summary>
        Für jede Aktion rufen wir die `on'-Funktion auf, um zu definieren, wie der Reducer auf diese spezielle Aktion reagieren soll.

        Es ist wichtig, den Zustand auf unveränderliche Weise zu ändern. Also erstellen wir neue Objekte, anstatt die bestehenden zu verändern.

        ```Typeskript
        const _farmReducer = createReducer(
        initialState,
        on(addFarmAction, (state, props) => {
            return {
            state,
            farms: [...state.farms, props]
            }
        }),...

        ```
</details>

- Der letzte Schritt im Reducer ist der Export einer Reducer-Funktion, die unseren erstellten Reducer aufruft
  - <details><summary>Hinweis: So kann Ihre reducer-Funktion aussehen</summary>
    Die reducer-Funktion ist ein Wrapper um unseren erstellten reducer

    ```Typescript
    export function farmReducer(state: FarmState | undefined, action: Action) {
        return _farmReducer(state, action)
    }
    ```
  </details>
- Die exportierte Funktion kann nun in der `App.module.ts` registriert werden. Im `StoreModule.forRoot`-Aufruf fügen wir den Reducer im ersten Parameter wie folgt hinzu: `StoreModule.forRoot({farmFeature: farmReducer}, {}),`

1. Selektoren erstellen
- Um den State auf bequeme Weise zu nutzen, definieren wir Selektoren. Die Selektoren werden verwendet, um direkt auf die verschachtelten Objekte im State zuzugreifen.
- Zunächst erstellen wir eine Datei farm.selector.ts
- Im Selektor definieren wir ein `AppState`-Interface, das definiert, wie der globale Zustand mit allen Reducern kombiniert wird
- Als nächstes fügen wir den Top-Level-Feature-Selector für unser Farm-Feature im Store hinzu
- Basierend auf dem Feature-Selektor fügen wir feinkörnige Selektoren für die benötigten Felder im Farm-State hinzu
  - <details><summary>Hinweis: So kann Ihr Selektor aussehen</summary>
  
    ````Typescript
    export interface AppState {
    farmFeature: FarmState
    }

    export const selectFarmFeature = (state: AppState) => state.farmFeature
    export const selectFarms = createSelector(selectFarmFeature, (state: FarmState) => state.farms)
    export const selectSelectedFarm = createSelector(selectFarmFeature, (state: FarmState) => state.selectedFarm)
    ```
  </details>

5. Verwendung des Stores in unserer Anwendung
- Wir können nun den Store verwenden, um den Zustand unserer Anwendung zu laden und zu ändern. Wir beginnen mit dem Laden der Liste der Farmen und dem Hinzufügen neuer Farmen
- Ändern des Hinzufügens neuer Farmen
  - Entfernen Sie den `FarmService` aus der `FarmFormularComponent` und ersetzen Sie ihn durch eine Referenz auf unseren Store: `private readonly store: Store<AppState>`
  - Ändern Sie die `addFarm`-Methode auf dispatch und `addFarmAction` mit der richtigen Payload
- Ändern Sie das Laden der Farms
  - Ersetzen Sie den `Farmservice` in der `FarmListComponent`
  - Erstellen Sie eine Variable auf Klassenebene für unsere FarmList. Der Typ sollte `Observable<Farm[]>` sein
  - Verwenden Sie unseren `selectFarms`-Selektor, um die farmList im Konstruktor zu füllen
  - <details><summary>Hinweis: So verwenden Sie einen Selektor</summary>
  
    ````Typescript
    this.farmList$ = store.pipe(map(
        state => selectFarms(state)
    ))
    ```
  </details>

    - Verwenden Sie die farmList im HTML-Code mit einer async-pipe

6. Ersetzen Sie die anderen Verwendungen des FarmService entsprechend
7. Löschen Sie den FarmService

### Hinweise:
Es gibt mächtige Werkzeuge, um unseren Store zu inspizieren und zu debuggen. Dazu müssen wir die [redux-devtools](https://github.com/reduxjs/redux-devtools) im Browser installieren. Nun können wir unseren Store mit dem Browser devtools inspizieren
