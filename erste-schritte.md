# Erste Schritte in JavaScript

## Was ist JavaScript?

JavaScript wurde vor mehr als zwanzig Jahren entwickelt, um Webseiten mehr
Funktionalität zu verleihen &mdash; HTML und CSS sind zwar ganz nützlich, aber
sie können eben nur festlegen, was dargestellt wird und wie es dargestellt wird.

JavaScript ist eine wirkliche Programmiersprache &mdash; du kannst damit *sehr*
viel machen. Ein Beispiel: du möchtest in einer Webseite die aktuelle Zeit
anzeigen lassen. HTML und CSS haben keine Möglichkeit, vom Browser zu Zeit
abzufragen. Du musst auf JavaScript zurückgreifen. Bei JavaScript gibt es
nämlich eine Funktion namens `Date.now()`, die dir die aktuelle Zeit
zurückliefert.

JavaScript war also geboren, aber es gab keine Firma oder Organisation, die
festlegen konnte, wie *genau* JavaScript jetzt funktionieren soll. Deshalb waren
das JavaScript im Netscape Navigator (der Vorgänger von Mozilla Firefox) und das
JavaScript im Internet Explorer von Microsoft etwas unterschiedlich.

Nach einiger Zeit kümmerte sich dann Ecma um die Programmiersprache. Ecma ist
eine Standardisierungsorganisation, d.h. eine Organisation, die für irgendwelche
Sachen (z.B. CD-ROM) Standards veröffentlicht. Der Vorteil eines solchen
Standards ist, dass es dann eine einheitliche Version gibt, an die sich alle
Hersteller halten. Ansonsten würde jeder Hersteller sein eigenes Süppchen kochen
und die Produkte verschiedener Hersteller würden nicht zusammenpassen.

Also gibt es nun auch einen Standard für JavaScript &mdash; EcmaScript, um genau
zu sein. Es gibt *eine einheitliche Programmiersprache*, die in allen gängigen
Webbrowsern läuft. Der Standard für EcmaScript ist
[*sehr* lang](https://www.ecma-international.org/ecma-262/8.0/index.html) und
definiert jedes einzelne Detail von EcmaScript.

Natürlich ändert sich EcmaScript auch &mdash; es kommen neue Features hinzu oder
alte werden geringfügig verändert. Deshalb gibt es verschiedene Versionen von 
EcmaScript. Wenn du also mal EcmaScript 6 (kurz ES6) siehst, dann meint das die 
sechste Version von EcmaScript. Zur Zeit kommt etwa jedes Jahr eine neue Version
heraus.

## Die Entwicklerkonsole

Alle gängigen Webbrowser bringen sogenannte Entwicklerwerkzeuge (developer
tools) mit, die die Webentwicklung erleichtern. Drück einfach mal
<kbd>F12</kbd>!

Je nach Browser schauen die Entwicklertools etwas anders aus. Sie bieten aber
alle einen DOM-Inspector und eine JavaScript-Konsole.

Der Inspektor lässt dich den aktuellen Inhalt der Seite betrachten und
verändern. So kannst du zum Beispiel ein neues Element hinzufügen oder ein
bestehendes löschen. Außerdem kannst du die CSS-Eigenschaften eines Elements
verändern. Das ist nützlich, wenn du einfach mal etwas ausprobieren willst, ohne
es gleich in einer CSS-Datei zu speichern.

Noch wichtiger aber ist die Konsole. Eine Konsole ist einer Kommandozeile
(Shell) sehr ähnlich &mdash; sie wartet darauf, dass du Befehle eingibst, führt
die Befehle aus und zeigt dir dann an, was dabei herausgekommen ist.

Das Besondere bei der JavaScript-Konsole ist, dass du hier JavaScript-Befehle
und Ausdrücke eingeben kannst. Ein Beispiel: öffne die Konsole und gib ein:

```JavaScript
2 + 2
```

Dann drück <kbd>Enter</kbd>.

Na? Was war die Antwort? Wenn jetzt `4` erschienen ist, dann herzlichen
Glückwunsch! Du hast dein erstes JavaScript-Programm ausgeführt.

Die JavaScript-Konsole ist wirklich wichtig in der Webentwicklung. Wenn dein
JavaScript-Programm einen Fehler macht, dann wird es in der Konsole angezeigt.
Bei dem Fehler steht dann auch gleich die Datei, die Zeile und die Spalte, in
der der Fehler entstanden ist.

Wenn deshalb dein Programm mal nicht tut, was du von ihm erwartest, schau am
besten in der Konsole nach. Wenn ich eine Webanwendung schreibe, mach ich die
Entwicklerwerkzeuge meistens gar nicht mehr zu.

Bei Java gibt es `System.out.println(...)`. Das gibt eine Zeile Text aus.

Bei JavaScript gibt es `console.log(...)`. Das gibt ebenfalls den Text aus, den
du ihm gibst. Aber wohin soll `console.log` den Text schreiben? Nun ja, es
steckt schon im Namen: der Text erscheint auf der Konsole (*console* im
Englischen).

## Die Beispiele selbst ausführen

Um den folgenden Beispielen zu folgen (was ich dir wärmstens empfehle), hast du
zwei Möglichkeiten:

#### Die JavaScript-Konsole

Du kannst die Befehle direkt in die Konsole eintippen, immer einen Befehl nach
dem anderen. Wenn das Beispiel so aussieht:

```JavaScript
let a = 5;          // deklariere die Variable 'a' und gib ihr den Wert 5
console.log(a + 3); // addiere zu der Variablen 3 dazu und schreib das Ergebnis auf die Konsole
```

... dann gibst du erst den ersten Befehl ein:

```
let a = 5;
```

Die Konsole wird dir mit `undefined` antworten. Dann gibst du den nächsten
Befehl ein:

```
console.log(a + 5);
```

Die Konsole wird erst `8` hinschreiben, gefolgt von `undefined`.

Aber Achtung: manche Befehle erstrecken sich über mehrere Zeilen. Ein Beispiel:

```JavaScript
if (a === 5) {
    console.log('Die Variable a hat den Wert 5.');
}
```

Dann kannst du *nicht* Folgendes eintippen:

```
if (a === 5) {
```

Denn das ist kein valider (korrekter) JavaScript-Befehl. Du würdest einen
Syntaxfehler zurückkriegen. Stattdessen musst du den gesamten `if`-Block
eingeben:

```
if (a === 5) { console.log('Die Variable a hat den Wert 5.'); }
```

#### Eine JavaScript-Datei

Du kannst die Befehle direkt in eine JavaScript-Datei schreiben. Die Datei muss
allerdings von einer HTML-Datei aufgerufen werden.

Die HTML-Datei könnte so aussehen:

```HTML
<!doctype HTML>
<html>
    <head>
        <title>Nur ein JavaScript-Test</title>
        
        <!-- Lade die JavaScript-Datei, um die es hier geht! -->
        <script src="test.js"></script>
    </head>
    <body>
    </body>
</html>
```

Die Datei `test.js` enthält dann den Beispiel-Code:

```JavaScript
let a = 5;          // deklariere die Variable 'a' und gib ihr den Wert 5
console.log(a + 3); // addiere zu der Variablen 3 dazu und schreib das Ergebnis auf die Konsole
```

Öffne dann im Browser die HTML-Datei. In der JavaScript-Konsole sollte jetzt `8`
stehen.

## Statements

Ein JavaScript-Programm besteht aus vielen Statements. Ein Statement ist ein
einzelner Schritt, der ausgeführt wird.

Es gibt verschiedene Arten von Statements, zum Beispiel `if`-Statements,
`for`-Schleifen, `while`-Schleifen und Funktionsdeklarationen.

Diese Statements sind besondere Statements, weil sie sich über mehrere Zeilen
erstrecken. Statements, die nur eine Zeile in Anspruch nehmen, sollten am besten
mit einem Semikolon (`;` oder Strichpunkt) abgeschlossen werden. Das muss man
nicht unbedingt tun, aber es gibt Situationen, wo du den Kopf auf die
Tischplatte schlagen willst, bis du feststellst, dass der Fehler von einem
vergessenen Semikolon ausgeht. *Deshalb einzeilige Statements immer mit `;`
abschließen!*

Hier sehen wir einige Beispiele für Statements:

```JavaScript
// ein einzeiliges Statement
let i = 0;

// eine while-Schleife geht über mehrere Zeilen
while (i < 10) {
    // in der while-Schleife befinden sich wieder Statements
    i += 1;
    
    // auch das if-Statement geht über mehrere Zeilen
    if (i % 2 === 0) {
        // ... und enthält ein einzelnes Statement
        console.log(i);
    } // hier endet das if-Statement
} // hier endet das while-Statement
```

Wenn du das Programm ausführst, solltest du folgende Ausgabe sehen:

```
2
4
6
8
10
```

Jetzt gehen wir das Programm mal durch und schauen uns jede einzelne Zeile an:

```JavaScript
let i = 0;  // wir beginnen bei 0

while (i < 10) {    // solange i kleiner als 10 ist
    i += 1; // erhöhe den Wert von i um 1
    
    if (i % 2 === 0) {  // wenn i gerade ist
        console.log(i); // gib i auf der Konsole aus
    }
}
```

In der ersten Zeile *deklarieren* wir eine Variable mit dem Namen `i`, das heißt
wir teilen dem Webbrowser mit, dass es ab jetzt diese Variable geben soll.
Gleichzeitig weisen wir der Variable einen Wert zu, nämlich `0`.

Im Gegensatz zu Java hat in JavaScript eine Variable *keinen* festgelegten
Datentyp. Es gibt zwar in JavaScript Datentypen (zum Beispiel `Number` für eine
Zahl und `String` für eine Zeichenkette), aber eine Variable kann erst einen
Datentyp beinhalten und später einen anderen:

```JavaScript
let a;          // deklariere die Variable
a = "Hallo!";   // weise der Variable einen String zu
a = 5;          // weise der Variable eine Zahl zu
console.log(a);
```

Dieses Programm ist valides JavaScript und wird `5` in der Konsole erscheinen
lassen. Wie du siehst, müssen wir der Variable nicht sofort einen Wert zuweisen.
Wir können sie einfach deklarieren und erst später benutzen. Wir können ihr aber
auch gleich einen Wert zuweisen.

In der nächsten Zeile beginnen wir mit der `while`-Schleife. Dabei wird geprüft,
ob eine bestimmte Bedingung wahr ist. Solange diese Bedingung wahr ist, wird der
Block von Statements, der in den geschweiften Klammern (`{` und `}`) steht,
ausgeführt.

In unserem Fall lautet die Bedingung `i < 10` (in Worten: *ist der Wert der
Variablen `i` kleiner als 10?*). Solange also `i` kleiner als zehn ist, werden
die folgenden Statements ausgeführt.

Das nächste Statement ist `i += 1;`. Wie dir von Java bekannt sein dürfte, ist
das eine Kurzschreibweise für `i = i + 1;`, was soviel bedeutet wie: *weise der
Variablen `i` den Wert der Summe aus `i` und 1 zu*. Somit wird `i` um eins
erhöht. Dazu sagt man auch Inkrementierung: wenn `i` inkrementiert wird, dann
wird `i` um 1 erhöht. Noch kürzer hätte man das so schreiben können: `i++`.

Darauf folgt ein `if`-Statement. Es funktioniert ähnlich der `while`-Schleife,
allerdings wird der Block von Statements nur einmal ausgeführt, wenn die
Bedingung erfüllt ist, ansonsten gar nicht.

Die Bedingung lautet hier `i % 2 === 0`. Das `%` ist der sogenannte
Modulo-Operator. Er gibt den Rest der Division seiner Operanden zurück. Einige
Beispiele:

```JavaScript
10 % 3 //--> 1, da der Rest aus 10 geteilt durch 3 eins ist
5 % 3  //--> 2, da der Rest aus 5 geteilt durch 3 zwei ist
8 % 2  //--> 0, da es bei 8 durch 2 keinen Rest gibt
```

Wenn `i` eine gerade Zahl beinhaltet, dann ist `i % 2` gleich 0, denn eine
gerade Zahl lässt sich ohne Rest durch zwei teilen. Wenn `i` aber ungerade ist,
dann ist `i % 2` gleich 1.

Der `===`-Operator überprüft, ob beide Seiten den gleichen Wert haben. Dieser
Operator funktioniert genauso wie der `==`-Operator in Java. 

Wenn `i` also gerade ist, dann hat `i % 2` den Wert `0`, und `0 === 0` ist eine
wahre Bedingung.

`console.log(i);` wird also nur ausgeführt, wenn `i` gerade ist. Deshalb siehst
du nur die geraden Zahlen in der Entwicklerkonsole.
