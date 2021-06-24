# Übung 1 - Komponentenstruktur

Schauen wir uns das LineChart-Beispiel aus `ng2-charts` an

https://valor-software.com/ng2-charts/#/LineChart

Dieses Beispiel besteht aus einer Komponente, die 
 - Zufallsdaten erzeugt (Logik)
 - Daten in einem Diagramm anzeigt (Darstellung)
 - Daten in einer Tabelle anzeigt (Darstellung)

### Übung:
 1. Verschieben Sie das Diagramm und die Diagrammkonfiguration in eine Präsentationskomponente 
 2. Fügen Sie dem Diagramm ein Klick-Ereignis hinzu, das die Methode "Randomize" auslöst.
 3. Verschieben Sie die Tabelle in eine Präsentationskomponente.
 4. Überprüfen Sie Ihre Komponenten und notieren Sie, wie dieses Refactoring die kognitive Komplexität reduziert hat

### Hinweise:
Behalten Sie die Methode `randomize()` in `app.component.ts`

Wann immer sich die Daten ändern, müssen Sie `chart.update()` aufrufen, um die neuen Daten zu rendern. Fügen Sie eine Methode `updateChart()` zu Ihrer `ChartComponent` hinzu und rufen Sie diese aus der Funktion `randomize()` in `app.component.ts` auf. Sie können dies tun, indem Sie `ChartComponent` als `ViewChild` referenzieren.


## Entwicklungsserver

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. Die App wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Bauen

Führen Sie `ng build` aus, um das Projekt zu bauen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert. Verwenden Sie das Flag `--prod` für einen Produktions-Build.
