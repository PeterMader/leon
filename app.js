/*
 *
 * Dies ist die JavaScript-Datei. Sie sorgt dafür, dass ein bestimmter Text erscheint, wenn der Button auf der
 * HTML-Seite geklickt wird.
 *
 */

document.addEventListener('DOMContentLoaded', function () {
    // wie oft wurde der Button bereits geklickt?
    var clicks = 0;
    
    // finde das Element mit der ID "button"
    var button = document.getElementById('button');

    // finde das Element mit der ID "reaktion"
    var reaktion = document.getElementById('reaktion');

    // definiere die Funktion 'onClick'
    function onClick () {

        // erhöhe den Wert der Variable 'clicks' um 1
        clicks++;

        var text = '';

        if (clicks === 1) {
            // beim ersten Klick
            text = 'Hallo!';
        } else if (clicks < 4) {
            // beim zweiten und dritten Klick
            text = 'Hmmm';
        } else {
            // bei allen folgenden Klicks
            text = 'Autsch!';
        }

        // setze den Inhalt des Elements mit der ID 'reaktion' auf den zuvor bestimmten Text
        reaktion.textContent = text;
    }

    // wenn der Button, den wir vorher gefunden haben, geklickt wird, soll die
    // Funktion 'onClick' ausgeführt werden.
    button.addEventListener('click', onClick);

});
