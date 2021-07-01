# Übung10NgrxMinimal

In dieser Übung wollen wir einen Blick auf den NgRx-Store werfen. Wir werden einige Actions, Reducers und Selectors implementieren und diese in unserer Applikation verwenden.
Die Definitionen für NgRx werden alle im NgRx-Ordner angelegt. Die Passenden Dateien sind schon vorhanden.

### Übung:
1. Erstellen der Actions
- Wir erstellen drei Actions: `addFarmAction`, `selectFarmAction`, `deselectFarmAction`
  - <details><summary>Hinweis: So erstellen Sie eine Aktion</summary>

    ```Typescript
    importieren Sie {createAction, props} aus "@ngrx/store";

    export const actionNameAction = createAction("actionName", props<Payload>())
    ```
</details>


2. Erzeugen des Reducers
   - Erzeugen Sie den Reducer durch Aufruf der Funktion `createReducer` mit dem Anfangszustand und allen Aktionen, die im Reducer behandelt werden sollen
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

3. Selektoren erstellen
- In der Selectors-Datei haben wir einen Feature-Selektor für unseren Farm-State
- Basierend auf dem Feature-Selektor fügen wir feinkörnige Selektoren für die benötigten Felder im Farm-Status hinzu
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

4. Verwendung des Stores in unserer Anwendung
- Wir können nun den Store verwenden, um den Zustand unserer Anwendung zu laden und zu ändern. Wir beginnen mit dem Laden der Liste der Farmen und dem Hinzufügen neuer Farmen
- Hinzufügen neuer Farmen ändern
  - `FarmFormularComponent`: Ändern Sie die `addFarm`-Methode auf dispatch und `addFarmAction` mit der richtigen Payload
- Ändern Sie das Laden der Farmen
  - `FarmListComponent`: Verwenden Sie unseren `selectFarms`-Selektor, um die FarmList im OnInit zu füllen
  - <details><summary>Hinweis: Wie man einen Selektor verwendet</summary>
  
    ````Typescript
    this.farmList$ = store.pipe(map(
        state => selectFarms(state)
    ))
    ```
  </details>

    - Verwenden Sie die farmList im HTML-Code mit einer async-pipe

5. Ersetzen Sie die anderen Verwendungen des FarmService entsprechend
    - `FarmListComponent`: Dispatch der SelectFarmAction
    - `FarmInfoHeaderComponent`:  Verwenden Sie unseren `selectFarms`-Selektor, um die FarmList im OnInit zu füllen
    - `FarmDetailsComponent`: :  Verwenden Sie unseren `selectSelectedFarms`-Selektor, um die FarmList im OnInit zu füllen, fügen Sie die `deselectFarm`-Aktion zur passenden Funktion hinzu
    - `AppComponent`: :  Verwenden Sie unseren `selectSelectedFarms`-Selektor, um die farmList im OnInit zu füllen
6. Löschen Sie den FarmService

### Als nächstes können wir ein wenig mit den Devtools herumspielen
1. Installieren Sie die [redux-devtools](https://github.com/reduxjs/redux-devtools) für Ihren Browser
2. Öffnen Sie die Anwendung
3. Öffnen Sie die Browser Devtools und wechseln Sie zur Registerkarte redux. Wir sollten das initiale Ereignis und den Zustand sehen.
4. Spielen Sie ein wenig in der Anwendung herum, um einige Ereignisse zu erzeugen
5. Klicken Sie auf die Aktionen, um die Nutzlast und den Status zu sehen, der erzeugt wird
6. Exportieren Sie den Status - Laden Sie die Seite neu - und importieren Sie ihn erneut
7. Sie können zum Zustand einer bestimmten Aktion zurückspringen
8. Sie können zu einer älteren Aktion springen und sehen, wie sich der Zustand ändert


### Hinweise:
Es gibt mächtige Werkzeuge, um unseren Store zu inspizieren und zu debuggen. Dazu müssen wir die [redux-devtools](https://github.com/reduxjs/redux-devtools) im Browser installieren. Nun können wir unseren Store mit den Browser-Devtools inspizieren.

Übersetzt mit www.DeepL.com/Translator (kostenlose Version)
