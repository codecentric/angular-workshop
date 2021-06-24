# Übung 8 Websockets

Wir werden Observables verwenden, um eine einfache Chat-App mit Websockets einzurichten.

### Übung:
1. Starten Sie `npm run start-websocket-server`, um das Websocket-Backend zu starten
2. Implementieren Sie eine `sendMessage()` Methode im `WebsocketService` über `socket.emit()`
    - Stellen Sie sicher, dass Sie `chat-message` als Event-Name verwenden - dieses Event ist dem Server bekannt
3. Implementieren Sie eine `getMessages()` Methode, die ein `Observable<string>` zurückgibt, das jedes Mal emitted, wenn der Socket eine neue `Chat-Nachricht` empfängt
    - Sie können dafür den `new Observable()` Konstruktor verwenden
    - Mit `socket.on('chat-message', callback)` können Sie auf über den Websocket empfangene Nachrichten reagieren  
4. Abonnieren Sie die durch `getMessages()` erzeugte Observable in Ihrer `WebsocketComponent` und schieben Sie neue Nachrichten in die `messageList`
5. Starten Sie die App (wenn Sie es noch nicht getan haben) und testen Sie, ob Sie Nachrichten senden und empfangen können
6. Öffnen Sie die App in einem anderen Browser (dadurch wird eine zweite Websocket-Verbindung geöffnet). Immer wenn Sie eine Nachricht senden, sollten Sie diese in beiden Fenstern sehen. 
7. Refactorn Sie den `WebsocketService`, um Nachrichten in einem BehaviorSubject zu speichern und dieses von `getMessages()` zurückzugeben


### Hinweise:
Erstellen Sie viele Log-Ausgaben in Ihrem `WebsocketService` und `WebsocketComponent`. Da die Websocket-Kommunikation ereignisgesteuert ist, hilft Ihnen das, den Überblick zu behalten und die Fehlersuche zu erleichtern.  

