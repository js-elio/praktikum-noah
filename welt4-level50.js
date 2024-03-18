// Gehe zu Laszlo, damit er dir seine Geheimzahl gibt.
hero.moveXY(30, 13);
var las = hero.findNearestFriend().getSecret();

// Füge zu Laszlos Nummer 7 hinzu, um Erzsebets Nummer zu berechnen.
// Gehe zu Erzsebet und sage ihre magische Zahl.
var erz = las + 7;
hero.moveXY(17, 26);
hero.say(erz);
// Teile Erzsebets Nummer durch 4, um Simonyis Nummer zu berechnen
var erz = erz / 4
// Gehe zu Simonyi und sag ihm seine Zahl.
hero.moveXY(30, 39);
hero.say(erz)
// Multipliziere Simonyis Nummer mit Laszlos, um Agatas Nummer zu berechnen.
// Gehe zu Agata und sag ihr ihre Zahl.
var erz = las * erz;
hero.moveXY(43, 26);
hero.say(erz);
