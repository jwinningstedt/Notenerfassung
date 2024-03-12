# Arbeiten mit xampp

## must have

> php version 8.2 oder höher

## php version ändern

> neue php version als zip datei runterladen auf http://windows.php.net/download/
> datei unzippen
> in das php verzeichnis gehen und einen neuen ordner erstellen ( z.B. php_8.2 )
> den Inhalt der zuvor heruntergeladenen datei in den neu erstellten Ordner einfügen
> httpd-xampp.conf datei öffnen ( xampp/appache/conf/extra )
> PHPINDIR suchen und den Pfad ändern zu [neu erstellten PHP Ordner]
> LoadModule suchen und den Pfad ändern zu [neu erstellten PHP Ordner]/php8apache2_4.dll
> LoadFile suchen und den Pfad ändern zu [neu erstellten PHP Ordner]/php8ts.dll

## Projekt Pfad ändern

> im XAMPP Control Panel auf Config > Apache (httpd.conf)
> DocumentRoot suchen und zu den Pfad ändern, wo das Backend des Programms liegt
> Directory suchen und zu den Pfad ändern, wo das Backend des Programms liegt

# Arbeiten mit GIT

## clone

> git clone URL

## aktueller Projektstatus anzeigen (Habe ich noch offene Änderungen die ich commiten muss?)

> git status

## stage changes

> git add . [All changes, new Files, Deletions]\
> git add -A [All changes, new Files, Deletions]\
> git add -U [All changes, Deletions]

## commit

> git commit -m "message" [Alle gestagten Dateien werden commited]\
> git commit -a -m "message" [Alle modifizierten und gelöschten Dateien werden automatisch gestaged und commited, neue Dateien werden nicht aufgenommen!]

## git fetch um aktuellen Status vom Repo zu holen

> git fetch

## pull (Änderungen beziehen + Rebase)

> git pull --rebase

## local rebase (lokale commits zusammenfügen)

> git rebase -i
