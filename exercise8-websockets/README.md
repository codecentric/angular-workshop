# Exercise 8 Websockets

We will use observables to setup a simple chat-app with websockets.

### Exercise:
1. Implement a `sendMessage()` method in the `WebsocketService` via `socket.emit()`
    - make sure to use `chat-message` as event-name - this event is known to the server
2. Implement a `getMessages()` method that returns an `Observable<string>` which emits everytime the socket receives a new `chat-message`
    - you can use the `new Observable()` constructor for this
    - `socket.on('chat-message', callback)` lets you react to messages received through the websocket  
3. Subscribe to the Observable created by `getMessages()` in your `WebsocketComponent` and push new messages to the `messageList`
4. Start the app (if you haven't already) and test if you can send and receive messages
5. Open the app in another browser (this opens a second websocket connection). Whenever you send a message you should see it pop up in both windows. 
6. Refactor the `WebsocketService` to store messages in a BehaviorSubject and return this from `getMessages()`


### Hints:
Create lots of log outputs in your `WebsocketService` and `WebsocketComponent`. Since the websocket communication is event-driven this will help you keep an overview and make debugging easier.  

