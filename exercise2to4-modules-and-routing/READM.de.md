# Übungen 2 - 4 Module

Wir beginnen mit einer kleinen App, die eine Liste von Farmen anzeigt und das Hinzufügen neuer Farmen sowie die Anzeige einer Detailansicht ermöglicht. Alle Komponenten werden dem App-Modul hinzugefügt. Dieser Ansatz wird nicht gut skalieren, wenn die App wächst. Daher werden wir diese App in kleinere Teile aufteilen.

### Übung 2:
1. Erstellen Sie zwei Featuremodule
   - ein `DashboardModule`, das die Kartenliste und den Info-Header enthält
   - ein `FarmModule`, das das Formular und die Detail-Ansicht für Farmen enthält.
2. Erstellen Sie ein `SharedModule`, das eine `FarmCard` enthält. Diese kann von beiden Feature-Modulen verwendet werden, um Code-Duplizierung zu reduzieren.
3. Verschieben Sie das `Farm`-Interface in den `Shared`-Ordner   
4. Fügen Sie einen Service hinzu, der die Liste der Farmen verwaltet und die Methoden `addFarm()` und `getFarms()` anbietet. 
5. Verschieben Sie den Service in einen `core`-Ordner und injecten Sie ihn über `providedIn: 'root'` in das Root-Modul

### Hinweise:
Um die Komponenten aus den FeatureModulen im HTML des AppModuls zu verwenden, müssen Sie diese aus dem FeatureModul exportieren.

### Übung 3:
Wenn Sie Übung2 nicht abgeschlossen haben, können Sie den Branch `exercise2-solution` auschecken und von dort aus fortfahren.

1. Führen Sie `ng build` oder `ng build --prod` aus und überprüfen Sie die Ausgabe im `dist`-Ordner
    - Ihre App ist in einen großen Chunk gepackt, der bei jedem Start der App geladen wird
2. Erstellen Sie eine `DashboardComponent` im `DashboardModule`, die als Einstiegspunkt für dieses Modul dient
3. Erstellen Sie ein `dashboard-routing.module`, das
    - eine Route mit dem Pfad `''` enthält, die auf die `DashboardComponent` verweist
    - alle anderen Routen auf die Einstiegs-Route umleitet
4. Fügen Sie eine Route zum `DashboardModule` im `app-routing.module` hinzu
    - Verwenden Sie `loadChildren`, um dieses Modul "lazy" zu laden
5. Fügen Sie ein `<router-outlet>` zu Ihrer `app.component.html` hinzu, um zu überprüfen, ob das neu konfigurierte Routing wie vorgesehen funktioniert
6. Erstellen Sie ein `farm-routing.module`, das
    - eine Route enthält, die auf die `FarmFormularComponent` verweist
    - eine Route enthält, die auf die `FarmDetailsComponent` verweist
7. Fügen Sie eine Route zum `FarmModule` im `app-routing.module` hinzu
    - Verwenden Sie `loadChildren`, um dieses Modul lazy zu laden
8.  Fügen Sie der `DashboardComponent` eine Schaltfläche hinzu, die zur `FarmFormularComponent` routet und zurück zum Dashboard routet, wenn eine neue Farm hinzugefügt wird
8. Routing hinzufügen, um zur `FarmDetailsComponent` zu navigieren 
9.  Entfernen Sie die unnötigen Importe des `FarmModule` und `DashboardModule` aus `app.module.ts`.
10. Führen Sie `ng build` oder `ng build --prod` aus und überprüfen Sie die Ausgabe im `dist`-Ordner
    - Sie sollten mehrere Chunks sehen (einen für jedes Feature-Modul)
    - Wenn Sie die Netzwerk-Registerkarte in den Entwickler-Tools Ihres Browsers öffnen, sollten Sie sehen, dass das Farm-Modul NICHT initial geladen wird, sondern erst, wenn Sie zu einer Route innerhalb des Moduls navigieren

### Hinweise:
Die Syntax für Lazy-Loading-Module lautet 
```
{
   path: 'route',
   loadChildren: () => import('./moduleFolder/moduleName.module').then(
     (Modul) => Modul.Modulname
   )
}
```

Denken Sie daran, das `RouterModule` von jedem Feature-Routing-Modul zu exportieren 

### Übung 4:
Wir werden nun einen tieferen Blick auf den Router werfen und "Breadcrumbs" zu unserer Anwendung hinzufügen, die dem Benutzer die aktuelle Position innerhalb der App anzeigen und Links anbieten, um zu zuvor besuchten Seiten zurück zu navigieren.
Dafür benötigen wir eine komplexere Routing-Struktur, damit wir den Effekt richtig beobachten können:

1. Erstellen Sie einen neuen Branch basierend auf `exercise4-starting-point`. Hier haben wir
   - alle Komponenten aus der vorherigen Übung in das `FarmModule` verschoben, um die Komplexität des Routings zu erhöhen
   - ein benutzerdefiniertes `data`-Attribut mit den Breadcrumb-Labels zu einigen Routen hinzugefügt.
   - einen `BreadcrumbService` hinzugefügt, mit dem Sie alle benötigten Informationen von den Routen erhalten werden
   - ein `BreadcrumbComponent` zu den meisten Komponenten hinzugefügt (für dieses Beispiel hätten wir auch ein einzelnes Breadcrumb zu `app.component` hinzufügen können, aber in einer realen Anwendung werden Sie wahrscheinlich eine gewisse Kontrolle über die Breadcrumbs innerhalb Ihrer Komponenten haben wollen)
2. Bis jetzt haben wir absolute Links verwendet, die leicht brechen und uns daran hindern, Komponenten an verschiedenen Stellen in der App zu verwenden.
   - Ersetzen Sie die kaputten Links, die von der `FarmDetailsComponent` und der `FarmFormularComponent` zurück navigieren, durch relative Links
3. fügen Sie ein `data`-Attribut zu jeder Route in `farm-routing.module` hinzu und fügen Sie dort Bezeichnungen für die Breadcrumb ein
4. Suchen Sie die `BreadcrumbComponent` und überprüfen Sie ihre Implementierung. Sie sollte
   - den aktuellen Breadcrumb als Titel-Element anzeigen und den Rest als Links auflisten
   - Rufen Sie den `BreadcrumbService` auf, um Breadcrumbs basierend auf der aktuellen Route zu erzeugen
5. Suchen Sie den `BreadcrumbService` und implementieren Sie eine Funktion, die eine Liste von Breadcrumbs zurückgibt, indem sie alle relevanten Informationen aus der aktuellen Route holt
6. kehren Sie zur `BreadcrumbComponent` zurück und fügen Sie die fehlenden Links für die Breadcrumbs hinzu
7. Erstellen Sie einen `RouteGuard` für die `FarmDetailsComponent`, der den Benutzer daran hindert, dorthin zu navigieren, wenn aktuell keine Farm ausgewählt ist (oder die aktuell ausgewählte Farm keinen Namen hat)

### Hinweise:
In diesem Beispiel verwenden wir nur eine einzige `Route
