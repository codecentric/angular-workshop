# Exercise 2 Modules

We start with a small app that displays a list of farms and allows to add new ones and display a detail view . All components are added to the app-module which won't scale well when the app grows. Thus we will split this app into smaller chunks.

### Exercise:
1. create two feature modules
   - a `DashboardModule` which contains the card-list and the info-header
   - a `FarmModule` which contains the formular and the detail-view for farms.
2. Create a `SharedModule` that contains a `FarmCard`. This can be used by both feature-modules to reduce code-duplication.
3. Move the `Farm` interface to the `shared`-folder   
4. Add a service which manages the list of farms and offers the methods `addFarm()` and `getFarms()`. 
5. Move the service to a `core`-Folder and inject it to the root-module via `providedIn: 'root'`

### Hints:
None - you can do this!
