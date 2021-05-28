# Exercise 6 Observables and Subjects

In this exercise we will create some basic observables and subjects to experiment with the behaviour

### Exercise:
1. Start the app via `ng serve`
2. Open the `ObservableComponent` and initialize the `interval$` Observable that generates a new number every second
3. Subscribe to the observable and
   - create a `console.log` message with an identifier for the observer and the emitted value 
   - set `intervalSubscriber1Value` to the emitted value 
4. Wait 5 seconds (by using `setTimeout()`) and subscribe a second time to the observable 
  - create a `console.log` message with an identifier for the observer and the emitted value 
   - set `intervalSubscriber2Value` to the emitted value
5. Note that the values of both subscriptions are not synchronized - each subscriber receives its own data
6. Open the console and watch the log-statements
   - then navigate to the Home component and note that the log-statements are still running
   - navigate back and forth between both components and note that we even add new subscriptions everytime the component is loaded
7. Implement the `OnDestroy` Lifecycle-Hook in the `ObservableComponent` and unsubscribe from the observable whenever the component gets destroyed

_________

Now we do something similar with a subject

8. Initialize `behaviourSubject$` with a new `BehaviourSubject`. It needs an initial value - start with an arbitrary number
9. Implement a method that increases the value of the subject by 1 
    - A BehaviourSubject always has exactly one value. You can read the current value of the subject from `behaviourSubject$.value`
10. Subscribe to the subject and
  - create a `console.log` message with an identifier for the observer and the emitted value
    - set `subjectSubscriber1Value` to the emitted value
11. Increase the value of the subject and then subscribe a second time
  - create a `console.log` message with an identifier for the observer and the emitted value
    - set `subjectSubscriber2Value` to the emitted value
12. Note that both subscribers are synchronized since subjects multicast their values
13. Implement a method `toggleSecondSubjectSubscriber()` that unsubscribes (or recreates) the second subscription
14. Use the UI to observe that the subject immediately receives the current value of the `BehaviourSubject` when a new subscription is created
15. Unsubscribe the subject in the `OnDestroy()` method

### Hints:

### Bonus Tasks:

Inject the `HttpClient` and send some GET Requests to `http://google.com`. 
Note that no Requests are sent when there are no subscriptions and multiple requests are sent if you subscribe multiple times to the observable.

