# Exercise 9 - Statemanagement

In this exercise we will start with the setup from our earlier module-examples and set it up to consume a REST-API 

### Exercise:
1. Change the `farms/details` to `farms/:id` in the `FarmRoutingModule`
2. Update the routerLink in the `FarmListComponent` to include the id of the selected farm and remove the click event 
   
3. Start the backend locally with `npm run start-backend`
   - this backend is a json-server which immitates a REST API for our farm-objects
4. update `getFarms` to utilize the new REST API which is accessible under `http://localhost:3000/farms`
   - add a `farms$` observable to the `FarmListComponent` and initialize it within `ngOnInit()`
   - bind `farms$` to the template using the `async` pipe
   - add a `farms$` observable to the `FarmInfoHeaderComponent` and initialize it within `ngOnInit()`
   - bind `farms$` to the template using the `async` pipe and use `*ngIf` to define an alias for the result
5. update `addFarm` to utilize the new REST API which is accessible under `localhost://3000/farms`
   - refactor the `FarmFormularComponent` to use the new implementation 
6. add a `getFarm(id)` method to the `FarmService`

### Hints:

### Bonus Tasks:

