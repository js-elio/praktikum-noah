// Die Oger verstecken sich im Camp.
// Brich durch ihre Verteidigung.

hero.moveXY(55, 14);
hero.moveXY(92, 9);

// Baue eine Feuerfalle ('fire-trap') auf das rote X.
hero.buildXY("fire-trap", 94, 19);
// Ziehe dich zum hözernen X zurück.
hero.moveXY(92, 9);
// Warte bis der Kanonier die glänzende Feuerfalle untersucht.
hero.buildXY("fire-trap", 92, 10);

// Betrete das Camp und lege Feuerfallen auf jedes rote X.
hero.buildXY("fire-trap", 90, 53);
hero.buildXY("fire-trap", 62, 60);
// Benutze die 'say' Methode um deinen Truppen den Rückzug ('retreat') zu signalisieren.
hero.say("retreat");
// Flieh zum hölzernen X auf der linken Seite.
hero.moveXY(11, 28);