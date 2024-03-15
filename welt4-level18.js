// Dein cleave muss 10 Sekunden lang abkühlen.
// Benutze eine else-Anweisung, um dich beim Aufladen zu verteidigen.

while(true) {
    var enemy = hero.findNearestEnemy();
    if(hero.isReady("cleave")) {
        hero.cleave();
    }
    // Schreibe else: um etwas zu tun, wenn cleave nicht bereit ist:
    else {
        hero.attack(enemy);
    }
        // Achte darauf, den Gegner anzugreifen:       
}
