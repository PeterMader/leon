# leon

Eine Einführung in JavaScript für Leon.

## Programmierumgebung

Da du ja mit Microsoft Windows arbeitest, Folgendes schon mal vorneweg: ich
empfehle dir dringend, im Windows Datei-Explorer die Dateiendungen anzeigen zu
lassen. Nehmen wir an, du hast folgende Dateien in einem Ordner:

* `index.html`: eine HTML-Datei
* `index.js`: eine JavaScript-Datei
* `style.css`: ein CSS-Datei

Stelle sicher, dass die Dateiendungen angezeigt werden, weil das ziemlich
wichtig ist. Andernfalls siehst du nämlich nur die Dateien `index`, `index` und
`style`.

Eclipse ist ein sogenanntes IDE, ein Integrated Development Environment
(integrierte Umgebung für (Software-)Entwicklung). Das heißt, dass bei Eclipse
schon sehr viel mit dabei ist, was du vielleicht brauchen könntest, und dass es
sehr viel für dich erledigt, was du dann nicht selber tun musst. Eclipse war
ursprünglich für Java-Programmierung gedacht, aber es gibt für Eclipse extrem
viele Plugins, sodass du es fast für jede Programmiersprache benutzen kannst.
Außerdem sind sogenannte Build-Tools dabei, die dafür sorgen, dass dein Projekt
richtig "gebaut" wird &ndash; also in ein Programm übersetzt wird, das ein
Computer ausführen kann (Java ist da übrigens ein Sonderfall, aber das ist eine
andere Geschichte).

Ich benutze *kein* IDE. Ich mach alles selber.

Ein wichtiges Werkzeug, das ist sehr oft benutze, ist die Kommandozeile (Command
Line). Das ist ein Programm, das darauf wartet, dass du Befehle eintippst, die
dann ausgeführt werden. 

Die Befehle sind von Kommandozeile (auch Shell genannte) zu Kommandozeile und
von Betriebssystem unterschiedlich. Bei Windows ist eine Shell dabei, die den
Namen `cmd` (kurz für "Command") trägt. Eine weitere wäre die Powershell, die
etwas mehr kann, aber ich habe dafür nie Verwendung gefunden, als ich noch
Windows-User war. Unter Linux gibt es viele Shells, die bekannteste ist `bash`.

In einer Shell befindest du dich immer in einem Order (auch Verzeichnis
genannt). Ein Befehl, den es in fast jeder Shell gibt, heißt `cd`, kurz für
"change directory". Damit wechselst du in einen anderen Ordner.

Ein Beispiel: du bist im Ordner "C:\Users\leon\Dokumente". Darin gibt es
folgende Dateien und Ordner:

* `beispiel_ordner`
* `mein_erstes_word_dokument.docx`
* `test.txt`

Wenn du jetzt `cd beispiel_ordner` eintippst und Enter drückst, *wechselst* du
in den Ordner `beispiel_ordner`. Mit `cd ..` kommst du wieder zurück in den
übergeordneten Ordner.

In `cmd` zeigt dir der Befehl `dir` (kurz für "directory", also Ordner oder
Verzeichnis) an, welche Dateien und Ordner im aktuellen Verzeichnis vorhanden
sind. In vielen anderen Shells (zum Beispiel `bash`) heißt dieser Befehl aber
`ls` (kurz für "list", also "Liste die Dateien auf!").

Ein weiterer Befehl, den es in jeder Shell gibt: `exit`. Damit beendest du die
Shell.

**Aber Achtung!** Wer sich ganz blöd anstellt, kann in der Shell unerwünschte 
Sachen machen. Den ganzen Computer löschen, zum Beispiel.

Da ich ja kein IDE verwende, hab ich einen ganz normalen Texteditor (*nicht Word
oder LibreOffice/OpenOffice*, das sind keine Texteditoren). Du kannst natürlich
weiterhin mit Eclipse arbeiten, aber für Windows würd ich dir als Einsteiger
einfach mal Notepad++ empfehlen. Mein Texteditor heißt Vim, allerdings muss man
sich da erst mal einarbeiten.

## Git und GitHub

Bei Software macht man immer wieder Änderungen. Wenn genug Änderungen
zusammengekommen sind, könnte man eine neue Version herausgeben.

Damit das nicht im Chaos endet, gibt es sogenannte Versionsverwaltungssysteme
(Version Control System, VCS). Ein beliebtes VCS ist Git, das auch ich benutze.

Git ist *freie Software*. Das bedeutet, dass der Benutzer das Recht hat, das
Programm zu benutzen, wie er will, zu kopieren und zu verändern. Sie wird meist
von Freiwilligen entwickelt. Ich achte darauf, dass ich möglichst viel freie
Software benutze (deshalb auch Linux, Vim, Firefox und so weiter).

Ein Softwareprojekt heißt bei Git "Repository" (kurz "Repo"). Wenn man Git
mitteilen möchte, dass eine Änderung im Projekt fertig ist, nennt man das einen
"Commit". Da ich auf in diesem Repository schon einige Sachen verändert habe, 
hat das Repository schon ein paar Commits. Mit Git kann man auch die vergangenen
Commits anschauen. Das ist hilfreich, wenn man Mist gebaut hat und einfach den
alten Stand wiederherstellen möchte.

Es gibt sehr umfangreiche Softwareprojekte, die Git einsetzen. Der
[Linux Kernel](https://github.com/torvalds/linux) zum Beispiel hat über 700000
Commits! Das heißt nicht, dass es 700000 verschiedene Linux-Versionen gibt, aber
700000 mal wurden Änderungen im Kernel in Git gespeichert.

GitHub ist ein Unternehmen, das für die Seite `github.com` verantwortlich ist.
Auf dieser Seite kann man Git-Repos veröffentlichen, und andere können bei dem
Projekt mitmachen. Man selbst hat aber die Kontrolle darüber, wer war verändern
darf.

Du kannst ein Projekt von GitHub als `.zip`-Datei runterladen und entpacken, du
kannst aber auch das Git-Repo selbst runterladen ("klonen"), aber nur, wenn du 
Git für Windows installiert hast. Bei Git für Windows ist übrigens eine eigene
Shell dabei: `git bash`. Damit kannst du `bash`-Befehle auch in Windows
benutzen.

## Webentwicklung

Normalerweise lädt man ein Programm auf seinen Computer herunter und installiert
es.

Seit ein paar Jahren gibt es aber immer mehr "Webanwendungen", also Programme,
die nur im Webbrowser laufen. Sie haben folgende Grundstruktur:

* HTML (Hypertext Markup Language): HTML definiert den Aufbau und den Inhalt der
Seite. Mit HTML kann man sagen: "Dieser Text ist ein Button".
* CSS (Cascading Style Sheets): CSS definiert das Aussehen und Layout der Seite.
Mit CSS kann man sagen: "Dieser Button soll grün sein".
* JavaScript (JS, eigentlich ECMAScript): JavaScript definiert das Verhalten der
Seite. Mit JavaScript kann man sagen: "Wenn der Benutzer auf den Button klickt,
soll darunter ein Bild erscheinen."

Eine Webanwendung hat Vorteile gegenüber einer "normalen" Anwendung, aber auch 
Nachteile. 

#### Vorteile

* *Der Benutzer muss nichts installieren.* Die benötigten Dateien (HTML-Dateien,
CSS-Dateien, JavaScript-Dateien, Bilder, Videos, Audio-Dateien, ...) liegen 
auf einem Server im Internet. Jeder Benutzer, der einen Webbrowser (Mozilla
Firefox, Google Chrome, Safari, Microsoft Edge, Internet Explorer) besitzt, kann
die Anwendung benutzen. Das geht nur, weil sich alle Browser an die sogenannten
Webstandards halten. Eine unabhängige Organisation mit dem Namen "World Wide Web
Consortium" (W3C) gibt diese Webstandards heraus. Da steht genau drin, was HTML,
CSS und JavaScript können müssen. Die Browser halten sich meistens daran.
* *Höhere Sicherheit*: eine Webanwendung kann keine Dateien auf dem Computer des
Benutzers speichern und auch keine Dateien lesen (höchstens Cookies). 
* Einige andere Vorteile.

#### Nachteile

* *Der Benutzer kann nichts installieren.* Man braucht Internetzugang, um eine 
Webanwendung benutzen zu können.
* Einige andere Nachteile.

## Beispiel

In diesem Git-Repo hab ich dir mal ein Beispiel dafür erstellt, wie JavaScript
mit HTML und CSS zusammenarbeiten kann.

Du kannst die HTML-Datei im Browser aufrufen, indem du diesem Link folgst:
[https://petermader.github.io/leon/leon.html](https://petermader.github.io/leon/leon.html).

Du kannst aber auch versuchen, das Repository auf deinen Computer zu klonen und
die HTML-Datei, die du dann auf deinem Computer hast, im Browser zu öffnen:

1. Du brauchst natürlich Git. Gibt's für auch für Windows:
[https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Öffne Git Bash und klone das Repository:
`git clone https://github.com/PeterMader/leon.git`.
3. Öffne die Datei im Browser (im Windows-Explorer oder der URL-Zeile des
Browsers, z. B. `file:///C:/Users/leon/pfad/zum/repo/leon/leon.html`).

Schau dir die drei Dateien genau an, auf GitHub oder, wenn du das Projekt
erfolgreich geklont hast, in einem Texteditor deiner Wahl auf deinem eigenen
Computer.

## Wie geht's weiter?

Natürlich musst du JavaScript nicht lernen. Ich könnte mit dir auch ein Projekt
in Java machen.

Wenn es dich aber doch interessiert, kannst du mich jederzeit fragen. Im
Internet gibt es außerdem viele Seiten, die dich voranbringen können:

1. Mozilla Developer Network
([https://developer.mozilla.org](https://developer.mozilla.org)): meiner Meinung
nach die beste Ressource für HTML, CSS und JavaScript. Die Seite wird von
Freiwilligen gestaltet und mit Inhalt gefüllt. Was dort beschrieben wird,
funkioniert natürlich nicht nur im Mozilla Firefox, sondern in allen modernen
Browsern. Sie haben auch gute Tutorials für Einsteiger.
2. StackOverflow ([https://stackoverflow.com](https://stackoverflow.com)):
eine *sehr* beliebte Frage- und Antwort-Seite für Programmierfragen. Wenn du mit
Google nach einer einer Programmierfrage suchst, ist sicherlich eines der ersten
Ergebnisse eine Frage auf StackOverflow. Die Antworten helfen in vielen Fällen
weiter.
3. Google! Ich habe mir viel selbst beigebracht und das meistens auf Google
gefunden. 
