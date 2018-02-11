# Ausdrücke

Ein Ausdruck ist etwas, das einen Wert hat. Und das ist so ziemlich alles.

## Zahlenliterale

Schauen wir uns doch mal die folgende Zeile etwas näher an:

```JavaScript
let variable = 15;
```

Das Ganze ist ein Statement. Es besteht aus vier Teilen:

1. dem Schüsselwort `let`: ein Schlüsselwort hat eine besondere Bedeutung.
Andere Beispiele für Schlüsselwörter sind `if`, `while`, `for`, `function` und
`const`.
2. dem Namen `variable`: jede Variable hat einen Namen. Im Englischen wirst du
für einen Variablennamen auch das Wort *identifier* finden.
3. dem Operator `=`: Operatoren sind &mdash; ähnlich den Schlüsselwörtern
&mdash; Zeichenfolgen mit besonderer Bedeutung. Sie stehen für irgendeine
Aktion, die ausgeführt werden soll. Andere Operatoren sind `+`, `-`, `*`, `/`,
`%`, `===`, `new` und `++`, aber es gibt noch viel mehr.
4. dem Ausdruck `15`: mit Ausdrücken befassen wir uns hier noch eingehender.

Das Semikolon am Ende hat keine semantische Bedeutung. Es sagt nur aus, dass das
Statement hier zu Ende ist.

`15` ist also ein Ausdruck. Und es ist ein besonderer Ausdruck: es ist ein
Literal. Ein Literal drückt einen festen Wert aus, der sich nie ändern wird.
`15` wird immer `15` sein. Der Wert einer Variablen `i` jedoch kann sich ändern.

Mit einem Zahlenliteral kann man also eine Zahl direkt ins Programm
hineinschreiben. Ein Zahlenliteral kann aus beliebig vielen Dezimalziffern (von
0 bis 9) bestehen. Beispiele:

```JavaScript
0
1
2
10000
123456789
1121
```

Für eine Dezimalzahl benutzt man einen Punkt (`.`) als Komma. Ist der Teil vor
dem Punkt `0`, so kann man ihn auch weglassen:

```JavaScript
1.5
7.25
3.0
4.3333333333333333333
100000.00001
0.53
.43 // dasselbe wie 0.43
.1  // dasselbe wie 0.1
```

Für eine negative Zahl setzt man ein `-` (Minus) davor:

```JavaScript
-4
-17.8
-10
-0      // ja, es gibt -0
-.22    // dasselbe wie -0.22
```

Außerdem kann man noch ein `e` oder `E`, gefolgt von einer ganzen Zahl,
dranhängen. Das hat die Bedeutung *mal zehn hoch ...*:

```JavaScript
1e4         // eins mal zehn hoch vier (1 * 10^4), also 10000
5e10        // 5 * 10^10, also 50000000000
2.2e1       // 2.2 * 10^1, also 22
4e-3        // 4 * 10^(-3), also 0.004
.12e2       // 0.12 * 10^2, also 12
-9.32e-6    // -9.32 * 10^(-6), also -0.00000932
```

### Hexadezimalzahlen

Wieso haben wir eigentlich zehn Ziffern? Wieso nicht acht? Oder zwei? Oder eben
sechzehn. Im Hexadezimalsystem gibt es nämlich sechzehn Ziffern:

```
Dezimal     Hexadezimal
0           0
1           1
2           2
3           3
4           4
5           5
6           6
7           7
8           8
9           9
10          a
11          b
12          c
13          d
14          e
15          f
```

Wenn es dich interessiert, erklär ich dir das Hexadezimalsystem gerne. Es reicht
aber zu wissen, dass man in JavaScript auch Hexadezimalzahlen im Zahlenliteral
angeben kann, indem man ein `0x` davor setzt. Das `x` steht für he*x*adezimal.
Das sieht dann so aus:

```JavaScript
0x8     // dezimal: 8
0xb     // dezimal: 11
0x10    // dezimal: 16
0xff    // dezimal: 255
0xFF    // dezimal: 255
0xffff  // dezimal: 65535
```

### Oktalzahlen

Im Oktalsystem gibt es nur acht Ziffern: von 0 bis 7. Eine Oktalzahl gibt man
an, indem man eine `0` vor die Zahl setzt:

```JavaScript
05      // dezimal: 5
012     // dezimal: 10
01000   // dezimal: 512
048     // Syntaxfehler! Im Oktalsystem gibt es keine Ziffer 8!
```

Statt der `0` kann man auch `0o` (`o` für *o*ktal) verwenden.

### Binärzahlen

Im Binärsystem gibt es nur zwei Ziffern: 0 und 1. Eine Binärzahl gibt man an,
indem man ein `0b` vor die Zahl setzt:

```JavaScript
0b1     // dezimal: 1
0b10    // dezimal: 2
0b100   // dezimal: 4
0b1100  // dezimal: 12
0b2     // Syntaxfehler!
```

Normalerweise reichen aber die Dezimalzahlen völlig aus.

## Stringliterale

Auch eine Zeichenkette kann man als festen Wert ins Programm schreiben. Ein
Stringliteral besteht aus Anführungszeichen und der Zeichenkette, die darin
eingeschlossen ist. Als Anführungszeichen können wir `"` oder `'` verwenden.

Du solltest aber nicht beide Arten von Anführungszeichen mischen! Ich würde die
doppelten Anführungszeichen empfehlen.

Beispiele:

```JavaScript
"Hallo!"
"test test test test"
"a"                 // dieser String besteht nur aus einem Buchstaben
""                  // ein leerer String
'Hello, World!'     // auch einfache Anführungszeichen sind möglich
```

Was aber, wenn das Anführungszeichen in der Zeichenkette vorkommen sollen? Das 
hier geht nicht:

```JavaScript
// Syntaxfehler!
let s = "Und er antwortete: "Nein, danke!", worauf sie sauer war.";
```

Eine Möglichkeit: die einfachen Anführungszeichen benutzen.

```JavaScript
let s = 'Und er antwortete: "Nein, danke!", worauf sie sauer war.';
```

Aber was ist, wenn beides vorkommen soll?

```JavaScript
// hier kommen beide Anführungszeichen vor! Syntaxfehler!
let s = "And he responded: "No thanks, that's not what I want.", which made her mad.";
```

Die Rettung: der Backslash (`\`)! Er gibt dem oder den folgenden Buchstaben eine
neue Bedeutung. `\"` hat die Bedeutung: füge dem String das Zeichen `"` hinzu.
So etwas nennt man *escape sequence*. Beispiele in JavaScripts Stringliteral
sind:

Escape-Sequenz  | Ergebnis
----------------|-----------------------------------
`\"`            | erzeuge `"`
`\'`            | erzeuge `'`
`\\`            | erzeuge `\`
`\t`            | füge einen horizontalen Tab hinzu
`\n`            | beginne eine neue Zeile

Beispiel:

```JavaScript
console.log("Der Moderator sagte: \"Und jetzt die Preisfrage: was ist drei mal drei?\"\nDiese Antwortmöglichkeiten gab es: \n(a) vier\t(b) acht\t(c) zehn\t(d) weiß nicht");
```

Das erzeugt folgende Ausgabe:

```
Der Moderator sagte: "Und jetzt die Preisfrage: was ist drei mal drei?"
Diese Antwortmöglichkeiten gab es: 
(a) vier	(b) acht	(c) zehn	(d) weiß nicht
```

## Boolean

Die Boolschen Werte sind wahr und falsch. Auch dafür gibt es ein Literal: `true`
für wahr und `false` für falsch.

## Operationen und Operatoren

Ein fester Wert, den wir durch ein Literal angeben, tut ja noch nichts. Wir
können aber verschiedene Ausdrücke miteinander verknüpfen &mdash; durch
Operationen. Welche Operation ausgeführt, geben wir durch den geeigneten
Operator an. Die Werte, die dabei eine Rolle spielen, nennen wir Operanden.

Ein Beispiel für eine Operation ist das folgende:

```JavaScript
2 + 2
```

Sie besteht aus zwei Operanden, die beide Ausdrücke sind (in diesem Fall
Literale) und dem Operator `+`. Die Operanden könnten wiederum Operationen sein:

```JavaScript
2 + (4 + 3)
```

Der rechte Operand ist hier wieder eine Operation. Zuerst wird der Wert des
einen Operanden berechnet. Der ist sowieso schon auf `2` festgelegt. Dann wird
der Wert des anderen Operanden berechnet. Dazu müssen erst mal `3` und `4`
addiert werden. Der Wert von `(4 + 3)` ist `7`.

Jetzt wurden beide Operanden berechnet, und die Operation kann vollzogen werden:
`2 + (4 + 3)` hat den Wert `9`.

Wenn der Wert eines Ausdrucks berechnet wird, sagt man, dass der Ausdruck
*evaluiert* wird (*evaluated* im Englischen).

### Unäre Operatoren

Ein unärer Operator hat nur einen Operanden. Ein Beispiel dafür ist der
`!`-Operator. Er negiert seinen Operanden, das heißt er macht aus wahr falsch
und aus falsch wahr:

```JavaScript
!true       //--> false
!false      //--> true
!(3 === 2)  //--> true, da (3 === 2) falsch ist
!(3 === 3)  //--> false, da (3 === 3) wahr ist
```

Es gibt noch einige andere unäre Operatoren (zum Beispiel `~` oder `new`), aber
der `!`-Operator ist der wichtigste.

### Binäre Operatoren

Ein binärer Operator hat zwei Operanden. Es gibt *sehr* viele binäre Operatoren,
hier ein Überblick:

Operator    | Bedeutung
------------|-------------------------------------------------------------------
`a + b`     | Berechne die Summe aus `a` und `b`
`a - b`     | Berechne die Differenz aus `a` und `b`
`a * b`     | Berechne das Produkt aus `a` und `b`
`a / b`     | Berechne den Quotienten aus `a` und `b`
`a % b`     | Berechne den Rest der Division aus `a` und `b`
`a && b`    | Wenn `a` falsch ist, gib `a` zurück, ansonsten `b`
`a || b`    | Wenn `a` wahr ist, gib `a` zurück, ansonsten `b`
`a === b`   | Wenn `a` den gleich Wert wie `b` hat, gib `true` zurück, ansonsten `false`
`a > b`     | Wenn `a` größer ist als `b`, gib `true` zurück, ansonsten `false`
`a < b`     | Wenn `a` kleiner ist als `b`, gib `true` zurück, ansonsten `false`
`a >= b`    | Wenn `a` größer oder gleich `b` ist, gib `true` zurück, ansonsten `false`
`a <= b`    | Wenn `a` kleiner oder gleich `b` ist, gib `true` zurück, ansonsten `false`

### Ternärer Operator

Es gibt einen Operator, der drei Operanden hat. Er besteht aus zwei Symbolen:
`?` und `:`.

Wenn der erste Operand wahr ist, wird der zweite Operand zurückgegeben,
ansonsten der dritte:

```JavaScript
a ? b : c
```

Wenn `a` wahr ist, wird `b` evaluiert und das Ergebnis zurückgegeben, ansonsten
wird `c` evaluiert und das Ergebnis davon wird zurückgegeben.

Beispiel:

```JavaScript
let a = (3 === 2) ? "ja" : "nein";
```

Hier wird überprüft, ob drei gleich zwei ist. Da das nicht der Fall ist, wird
der dritte Operand (`"nein"`) zurückgegeben. Die Variable `a` hat also den Wert
`"nein"`.

## Funktionsaufrufe

Auch ein Funktionsaufruf ist ein Ausdruck. Mit Funktionen beschäftigen wir uns
in [funktionen.md](funktionen.md).

## Objektliterale

Jedes Literal ist ein Ausdruck, auch ein Objektliteral. Was Objekte und
Objektliterale sind, darum geht es in [objekte.md](objekte.md).

Arrays und Arrayliterale sind eine Sonderform von Objekten.

## Wozu das Ganze?

Ich wollte nur, dass du verstehst, was ich meine, wenn ich so etwas schreibe:

```JavaScript
// eine Variable können wir so deklarieren
let a;
let a = (ausdruck);
```

Der Ausdruck kann alles sein, was ich in diesem Artikel beschrieben habe:

```JavaScript
let a = 5;      // ein Zahlenliteral
let a = "test"; // ein Stringliteral
let a = 4 * 2;  // eine Operation
// ...
```
