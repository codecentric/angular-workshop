# Grundlagen 1 - Projekt einrichten

Wir werden die Angular-CLI verwenden, um ein neues Projekt einzurichten (und zu überprüfen, ob unser Tooling wie erwartet funktioniert)

### Übung:
1. Erstellen Sie ein neues Projekt und starten Sie es
    ```
    cd basics1-project-setup
    
    ng neu test-app
    cd test-app
    ng serve
    ```
2. öffnen Sie `http://localhost:4200/` in einem Browser
  
3. Erstellen Sie eine neue Komponente, eine Pipe und einen Service im app-Ordner
    ```
    cd src/app
    
    ng generate component base
    ng generate service number
    ng generate pipe modify
    ```
   
4. Das CLI hat bereits alles im `AppModule` registriert. Es ist also kein weiteres Setup nötig, um die generierten Elemente zu verwenden:
    - schreiben Sie eine `getRandomNumber()` Methode in den `NumberService`
    - Lassen Sie die `ModifyPipe` 2 zum `Wert` hinzufügen 
    - Verwenden Sie die `BaseComponent`, um eine Zufallszahl aus dem Dienst zu holen und die `ModifyPipe` anzuwenden (zweimal)      

### Tooling

- Sie können ESLint zu einem neuen Projekt hinzufügen, indem Sie
    ```
    ng add @angular-eslint/schematics
    ```

- Sie können Prettier.js zu einem Projekt hinzufügen, indem Sie
    ```
    npm install prettier -D
    ```

  ausführen und eine `.prettierrc`-Datei mit dem folgenden Inhalt erstellen. Beachten Sie, dass Sie wahrscheinlich auch entweder ein Plugin für Ihre IDE oder Commit-Hooks einrichten wollen.

    ```
    {
      "printWidth": 120,
      "singleQuote": true,
    }
    ```


### Hinweise:
- Wenn Sie Chrome installiert haben, werfen Sie einen Blick auf die [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
  

- Die meisten IDEs bieten auch eine Integration für das Angular CLI an. Nehmen Sie sich einen Moment Zeit, um zu prüfen, welche Unterstützung, Hotkeys oder Plugins Ihre bevorzugte IDE für Angular bietet.
   - IntelliJ/ Webstorm: [Angular Plugin](https://plugins.jetbrains.com/plugin/6971-angular-and-angularjs) 
   - Visual Studio Code: [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials&WT.mc_id=javascript-0000-jopapa)


## Entwicklungsserver

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. Die App wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Bauen

Führen Sie `ng build` aus, um das Projekt zu bauen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert. Verwenden Sie das Flag `--prod` für einen Produktions-Build.


Übersetzt mit www.DeepL.com/Translator (kostenlose Version)