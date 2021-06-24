# Übung 9 - Statemanagement

In dieser Übung werden wir mit dem Setup aus unseren früheren Modulbeispielen beginnen und es so einrichten, dass es eine REST-API konsumiert 

### Übung:
1. Ändern Sie `farms/details` in `farms/:id` im `FarmRoutingModule`
2. Aktualisieren Sie den RouterLink in der `FarmListComponent`, so dass er die ID der ausgewählten Farm enthält und entfernen Sie das Klick-Ereignis 
   
3. Starten Sie das Backend lokal mit `npm run start-backend`
   - dieses Backend ist ein json-server, der eine REST-API für unsere Farm-Objekte imitiert
4. aktualisieren Sie `getFarms`, um die neue REST-API zu nutzen, die unter `http://localhost:3000/farms` erreichbar ist
   - Fügen Sie ein `farms$` Observable zur `FarmListComponent` hinzu und initialisieren Sie es in `ngOnInit()`
   - binden Sie `Farmen$` mit der `async`-Pipe an das Template
   - Fügen Sie eine "Farms$"-Observable zur "FarmInfoHeaderComponent" hinzu und initialisieren Sie diese innerhalb von "ngOnInit()".
   - binden Sie `farms$` mit der `async`-Pipe an das Template und verwenden Sie `*ngIf`, um einen Alias für das Ergebnis zu definieren
5. Aktualisieren Sie `addFarm`, um die neue REST-API zu verwenden, die unter `localhost://3000/farms` erreichbar ist
   - Refactorn Sie die `FarmFormularComponent`, um die neue Implementierung zu verwenden 
6. Fügen Sie eine `getFarm(id)` Methode zum `FarmService` hinzu

### Hinweise:

### Bonus-Aufgaben:

