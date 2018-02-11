# Primzahlen

In diesem Artikel entwickeln wir ein Programm, das die Primzahlen bis 100
ausgibt.

## Definition

Eine Primzahl ist eine Zahl, die sich nur durch 1 und durch sich selbst teilen
lässt.

## Das Grundgerüst

Bei den Primzahlen gibt es keine erkennbare Ordnung; es gibt kein Muster.

Deshalb bleibt uns nichts anderes übrig, als von 2 bis 100 zu zählen und dabei
jede Zahl zu überprüfen.

Wir verwenden daher dasselbe Grundgerüst wie in
[erste-schritte.md](erste-schritte.md):

```JavaScript
let i = 1;

while (i < 100) {
    i += 1;

    // hier überprüfen wir, ob i eine Primzahl ist
}
```

## Ist `i` eine Primzahl?

Wie ermitteln wir, ob eine beliebige Zahl eine Primzahl ist?

Die einfachste Methode ist, alle Zahlen als Teiler durchzuprobieren. Wenn wir
beispielweise überprüfen, ob 19 eine Primzahl ist, schauen wir nach, ob sich 19
durch 2, 3, 4, ..., 17 oder 18 teilen lässt. Wenn es sich durch eine dieser
Zahlen teilen lässt, dann ist es keine Primzahl. Wenn es sich nicht teilen
lässt, dann ist es eine Primzahl.

```JavaScript
let i = 19; // nur ein Beispiel
let j = 1;
while (j < i) { // solange j kleiner als 18 ist
    j += 1;
    if (i % j === 0) {
        // i lässt sich durch 19 teilen, 19 ist also keine Primzahl
    }
}
```

Bei der ersten Zahl, durch die 19 sich teilen lässt, können wir schon aufhören,
denn dann wissen wir schon, dass 19 keine Primzahl ist. Wir müssen also die
`while`-Schleife abbrechen, bevor sie von selbst aufhören würde. Das geht mit
dem `break`-Statement:

```JavaScript
let i = 19;
let j = 2;
while (j < i) {
    j += 1;
    if (i % j === 0) {
        // die while-Schleife soll aufhören
        break;
    }
}
```

Aber wie wissen wir, wenn die Schleife durchgelaufen ist, ob `i` eine Primzahl
ist? Nun ja, wenn wir einen Teiler gefunden haben, der kleiner als `i` ist, dann
kann `i` keine Primzahl sein. Wir müssen also überprüfen, ob nach der Schleife
`j` genauso groß ist wie `i`:


```JavaScript
let i = 19;
let j = 1;
while (j < i) {
    j += 1;
    if (i % j === 0) {
        // die while-Schleife soll aufhören
        break;
    }
}

if (i === j) {
    // i ist eine Primzahl
}
```

## Das ganze Programm

```JavaScript
let i = 1;

while (i < 100) {
    i += 1;

    let j = 1;
    while (j < i) {
        j += 1;
        if (i % j === 0) {
            break;
        }
    }

    if (i === j) {
        // i ist eine Primzahl
        console.log(i);
    }
}
```

Dieses Programm produziert folgendes Ergebnis:

```
2
3
4
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89 
97
```

Das sind die Primzahlen bis 100! Probiers selbst aus!
