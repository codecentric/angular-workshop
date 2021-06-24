# Übung 7 RxJS-Operatoren

Diese Übung beinhaltet einen `UserService` und einen `AddressService`, die sich so verhalten, als würden sie eine externe API konsumieren.

Ihre Aufgabe ist es, mit Hilfe von RxJS-Operatoren die zur Benutzernummer passende Adresse aus der Benutzereingabe zu holen.

### Übung:
1. Erzeugen Sie das Subject `Kundennummer$` aus der Benutzereingabe (wir werden später sehen, dass reaktive Froms hierfür Out-of-the-Box Observables bereitstellen)
2. Leiten Sie die `validatedCustomerNumber$` ab, indem Sie Benutzereingaben herausfiltern, die nicht numerisch sind
    - Verwenden Sie auch den Operator `debounceTime()`, um zu verhindern, dass Ihre Dienste mit Anfragen überflutet werden, während der Benutzer tippt.
3. Verwenden Sie die `validatedCustomerNumber$`, um den `Customer$` aus dem `CustomerService` zu holen
4. Verwenden Sie die `Kunden$`, um die `Adresse$` aus dem `AddressService` zu holen
5. Aufräumen des Codes durch Verschieben "komplexer" Lambda-Funktionen in private Methoden. Die gesamte Logik in `ngOnInit` zu behandeln, wird sehr schnell unleserlich. 

### Hinweise:
Die Methoden der Dienste werfen (rxjs)Fehler, wenn keine Daten gefunden werden. 
Achten Sie darauf, diese zu behandeln, da jede Subscription nach dem Empfang eines unbehandelten Fehlers beendet wird.

### Bonus-Aufgaben:

