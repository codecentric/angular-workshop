# Übung 6 Observables und Subjects

In dieser Übung werden wir einige grundlegende Observables und Subjects erstellen, um mit dem Verhalten zu experimentieren

### Übung:
1. Starten Sie die App über `ng serve`
2. Öffnen Sie die `ObservableComponent` und initialisieren Sie die `Interval$` Observable, die jede Sekunde eine neue Zahl erzeugt
3. Subscriben Sie das Observable und
   - erstellen Sie eine `console.log`-Nachricht mit einem Bezeichner für den Observer und dem ausgegebenen Wert 
   - Setzen Sie `intervalSubscriber1Value` auf den ausgegebenen Wert 
4. Warten Sie 5 Sekunden (mit `setTimeout()`) und Subscriben Sie ein zweites Mal das Observable 
   - Erstellen Sie eine `console.log`-Nachricht mit einem Bezeichner für den Observer und dem ausgegebenen Wert 
   - setzen Sie `intervalSubscriber2Value` auf den ausgegebenen Wert
5. Beachten Sie, dass die Werte der beiden Subscriptions nicht synchronisiert werden - jeder Subscriber erhält seine eigenen Daten
6. Öffnen Sie die Konsole und beobachten Sie die Log-Statements
   - Navigieren Sie dann zur Home-Komponente und beachten Sie, dass die Log-Statements noch laufen
   - Navigieren Sie zwischen beiden Komponenten hin und her und beachten Sie, dass wir sogar jedes Mal, wenn die Komponente geladen wird, neue Subscriptions hinzufügen
7. Implementieren Sie den `OnDestroy` Lifecycle-Hook in der `ObservableComponent` und melden Sie sich von der Observable ab, wenn die Komponente zerstört wird

_________

Jetzt machen wir etwas Ähnliches mit einem Subject

8. Initialisieren Sie `behaviourSubject$` mit einem neuen `BehaviourSubject`. Es braucht einen Anfangswert - beginnen Sie mit einer beliebigen Zahl
9. Implementieren Sie eine Methode, die den Wert des Subjekts um 1 erhöht 
    - Ein BehaviourSubject hat immer genau einen Wert. Sie können den aktuellen Wert des Subjects aus `behaviourSubject$.value` auslesen
10. Subscriben Sie das Subjekt und
    - erzeugen Sie eine `console.log`-Nachricht mit einem Bezeichner für den Observer und dem ausgegebenen Wert
    - setzen Sie `subjectSubscriber1Value` auf den ausgegebenen Wert
11. Erhöhen Sie den Wert des Subjects und subscriben Sie dann ein zweites Mal
    - Erstellen Sie eine `console.log`-Nachricht mit einem Bezeichner für den Observer und dem gesendeten Wert
    - setzen Sie `subjectSubscriber2Value` auf den gesendeten Wert
12. Beachten Sie, dass beide Subscriber synchronisiert sind, da subjects ihre Werte per Multicast übertragen
13. Implementieren Sie eine Methode `toggleSecondSubjectSubscriber()`, die den zweiten Subscriber abmeldet (oder neu erstellt)
14. Verwenden Sie die Benutzeroberfläche, um zu beobachten, dass das Subject sofort den aktuellen Wert des `BehaviourSubject` erhält, wenn eine neue Subscription erstellt wird
15. Melden Sie das Subject in der Methode `OnDestroy()` ab

### Hinweise:

Sie können `setTimeout()` abbrechen, indem Sie den Timeout einer Variablen zuweisen und `clearTimeout(timeout)` in `onDestroy()` aufrufen

_____

Ein mMster für das unsubscribe in der OnDestroy-Methode ist wie folgt:

```
destroyed$: Subject<void> = new Subject()
```

und `destroyed$.next()` innerhalb von `onDestroy()` aufzurufen. 

Sie können dann `takeUntil(destroyed$)` auf ein beliebiges Observable oder Subject anwenden, um es zu beenden, wenn die Komponente zerstört wird; damit entfällt die Notwendigkeit, sich manuell abzumelden

### Bonus-Aufgaben:

Injizieren Sie den `HttpClient` und senden Sie einige GET-Requests an `http://google.com`. 
Beachten Sie, dass keine Requests gesendet werden, wenn es keine Abonnements gibt, und dass mehrere Requests gesendet werden, wenn Sie das Observable mehrfach abonnieren.

