# Angular-Workshop

Dieses Repository enthält die Übungen und Code-Snippets für den Angular-Workshop für Fortgeschrittene.

## Vorraussetzungen
 - @angular/cli: 12.0.1 (oder höher)
 - node.js: 12.20 (oder höher)

Die Übungen setzen voraus, dass die `@angular/cli` Version 12.0.1 (oder höher) installiert ist. Um die Übungsprojekte auszuführen, benötigt man `node.js` in der Version 12.20 (oder höher).

Bitte beachten: Jedes Projekt hat eine eigene CLI Version definiert, welche in den `devDependency` in der Datei `package.json` angegeben ist. Daher wird ein Upgrade der global installierten CLI das Dev-Tooling für alle bestehenden Projekte nicht beeinträchtigen. 

Ein Upgrade der Node-Version kann jedoch Änderungen mit sich bringen. Für den Fall, dass eine ältere Version von Node installiert werden muss, kann `node version manager (nvm)` verwenden werden, um mehrere Node-Versionen zu installieren und bei Bedarf zwischen ihnen zu wechseln.

1. Prüfen Sie, welche Versionen von node.js und der Angular CLI Sie installiert haben.
    - Node: `node -v`    
    - Angular CLI: `ng Version`
2. Installieren Sie die neueste Version des Angular CLI.
   - Ausführen 
   ```
   npm uninstall -g @angular-cli
   npm install -g @angular/cli@latest
   ```
   - Führen Sie `ng version` erneut aus, um sicherzustellen, dass Sie die CLI-Version 12.0.1 oder höher installiert haben
3. Aktualisieren Sie Ihre Node-Version (wenn Ihre installierte Version älter als 12.20 ist)
   - um die aktuellen Versionen des Angular CLI zu verwenden, benötigen Sie mindestens die Version 12.20 von Node.
   - Sie können `nvm` verwenden, um mehrere Node-Versionen installiert zu haben

## Übungen

Um eine Übung zu starten, navigieren Sie zum entsprechenden Ordner und installieren Sie die npm-Abhängigkeiten 

> cd exercise{exerciseNumber}-{exerciseName}
> 
> npm install  

Die Datei `README.md` im exercise-Ordner enthält Anweisungen, was zu tun ist, um die Übung abzuschließen. Die Anwenisungen in der Readme sind in englisch. Zusätzlich gibt es eine `README.de.md` welche deutsche Anweisungen enthält.

## Entwicklungsserver

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Bauen

Führen Sie `ng build` aus, um das Projekt zu erstellen.


Übersetzt mit www.DeepL.com/Translator (kostenlose Version)