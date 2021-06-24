# Grundlagen 2 - Testen

Wir verwenden das Projekt-Setup, das wir in der ersten Übung erstellt haben (mit ein bisschen mehr Komplexität), um einen Blick auf Unittests in Angular zu werfen

### Übung:
1. Starten Sie die Tests über `ng test` oder `npm run test`
2. Schreiben Sie Unittests für den `NumberService`, die Folgendes testen:
   - eine generierte Zahl ist vom Typ Zahl
   - das Generieren einer Zahl erhöht die Länge der `numberHistory` 
   - eine generierte Zahl wird an die `numberHistory` angehängt
   - das Verhalten von `getPreviousNumber()`, wenn die `numberHistory` leer ist 
   - nach der Generierung von drei Zufallszahlen gibt `getPreviousNumber()` die zweite generierte Zahl zurück.  
3. Schauen Sie sich das `TestBed`-Setup für die `BaseComponent` an und
   - Testen Sie, dass die `Zahl` initialisiert wird, wenn die Komponente erstellt wird  
   - Erstellen Sie eine Mock-Implementierung für den `NumberService`
   - Testen Sie, dass `getRandomNumber()` aufgerufen wird, wenn die Komponente initialisiert wird
   - Testen Sie, dass `getRandomNumber()` aufgerufen wird, wenn der Benutzer auf die Schaltfläche klickt
   - Testen Sie, dass die generierte Zahl tatsächlich gerendert wird, indem Sie das `nativeElement` überprüfen
   - Beachten Sie, dass die `ChildComponent` im Test nicht gerendert wird, da sie nicht im `TestBed`-Setup registriert ist
4. machen Sie `number` zu einer `@Input` Eigenschaft der `ChildComponent` und übergeben Sie die generierte Zahl von der `BaseComponent`.
5. fügen Sie der `ChildComponent` eine `@Output`-Eigenschaft hinzu, um eine neue Zufallszahl zu generieren, wenn die Schaltfläche angeklickt wird
6. Fügen Sie ein `ChildComponentMock` zu den Tests der `BaseComponent` hinzu
7. Die Tests für `ChildComponent` sind derzeit über `xdescribe()` deaktiviert
   - aktivieren Sie die Tests und prüfen Sie, warum sie fehlschlagen
   - fixieren Sie den Testaufbau für `ChildComponent`
8. Schreiben Sie einen parametrisierten Test für die `ModifyPipe`
9. Führen Sie `ng test --no-watch --code-coverage` aus, um zu prüfen, ob Sie mit Ihren Tests 100% Code-Abdeckung erreicht haben

## Entwicklungsserver

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. Die App wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Bauen

Führen Sie `ng build` aus, um das Projekt zu bauen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert. Verwenden Sie das Flag `--prod` für einen Produktions-Build.


Übersetzt mit www.DeepL.com/Translator (kostenlose Version)
