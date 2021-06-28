# Exercise 7 RxJS Operators

This exercise includes a `CustomerService` and an `AddressService` that behave as if they were consuming an external API.

Your task is to use RxJS operators to fetch the address that matches the customernumber from the userinput.

### Exercise:
1. Create the `customerNumber$` Subject from the userinput
   - use the `updateCustomerNumber()` method to update the value of `customerNumber$`
   - we will see later that reactive froms provide observables for this out-of-the-box
2. Derive the `validatedCustomerNumber$` by filtering out userinput that is not numeric
    - also use the `debounceTime()` operator to prevent spamming your services with requests while the user is typing.
3. Use the `validatedCustomerNumber$` to fetch the `customer$` from the `CustomerService`
4. Use the `customer$` to fetch the `address$` from the `AddressService`
5. Cleanup the code by moving "complex" lambda-functions into private methods. Handling all logic in `ngOnInit` will get unreadable really fast. 

### Hints:
Make sure you understand the difference between `map()` and `switchMap()`

### Bonus Tasks:
Use the alternative implementations in the `CustomerService` and `AddressService` which throw an error when no data is found. 

Make sure to handle those errors in the `AppComponent`, because any subscription will terminate after receiving an unhandled error. 
