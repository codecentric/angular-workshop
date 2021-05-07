# Exercises 2 - 4 Modules

We start with a small app that displays a list of farms and allows to add new ones and display a detail view . All components are added to the app-module which won't scale well when the app grows. Thus we will split this app into smaller chunks.

### Exercise 2:
1. create two feature modules
   - a `DashboardModule` which contains the card-list and the info-header
   - a `FarmModule` which contains the formular and the detail-view for farms.
2. Create a `SharedModule` that contains a `FarmCard`. This can be used by both feature-modules to reduce code-duplication.
3. Move the `Farm` interface to the `shared`-folder   
4. Add a service which manages the list of farms and offers the methods `addFarm()` and `getFarms()`. 
5. Move the service to a `core`-Folder and inject it to the root-module via `providedIn: 'root'`

### Hints:
To use the Components from the FeatureModules in the HTML of the AppModule you need to export them from the FeatureModule.

### Exercise 3:
If you did not complete exercise2 you can checkout the branch `exercise2-solution` and continue from there.

1. Run `ng build` or `ng build --prod` and check the output in the `dist` Folder
    - your app is packaged into one large chunk that is loaded whenever the app is started
2. Create a `DashboardComponent` in the `DashboardModule` which serves as entry-point for this module
3. Create a `dashboard-routing.module` which
    - contains a route with path `''` which links to the `DashboardComponent`
    - redirects all other routes to the entry-route
4. Add a route to the `DashboardModule` in the `app-routing.module`
    - use `loadChildren` to lazy-load this module
5. Add a `<router-outlet>` to your `app.component.html` to check that the newly configured routing works as intended
6. Create a `farm-routing.module` which
    - contains a route which links to the `FarmFormularComponent`
    - contains a route which links to the `FarmDetailsComponent`
7. Add a route to the `FarmModule` in the `app-routing.module`
    - use `loadChildren` to lazy-load this module
8. Add a button to the `DashboardComponent` which routes to the `FarmFormularComponent` and route back to the dashboard when a new farm is added
9. Add routing to navigate to the `FarmDetailsComponent` 
10. Remove the unnecessary imports of the `FarmModule` and `DashboardModule` from `app.module.ts`
11. Run `ng build` or `ng build --prod` and check the output in the `dist` Folder
    - you should see multiple chunks (one for each feature-module)
    - when you open the network-tab in the developer-tools of your browser you should see that the farm-module is NOT loaded initially, but only when you navigate to a route within the module

### Hints:
The syntax for lazy-loading modules is 
```
{
   path: 'route',
   loadChildren: () => import('./moduleFolder/moduleName.module').then(
     (module) => module.ModuleName
   )
}
```

Remember to export the `RouterModule` from each feature-routing-module 

### Exercise 4:
We will now take a deeper look at the router and will need a more complex routing structure.  

1. Create a new branch based on `exercise4-starting-point`. Here we
    - moved all components from the previous exercise to the `FarmModule` to increase the complexity of the routing
    - added a `BreadcrumbComponent` to each route (we could've added a single breadcrumb to `app.component` for this example but in a real application you will probably want some control over the breadcrumbs from within your components)
    - added a custom `data` attribute with the breadcrumb-labels to some routes. 
    - added a `BreadcrumbService` which you will use to get all required information from the routes 
  
