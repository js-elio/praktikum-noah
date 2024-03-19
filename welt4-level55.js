// Du kannst eine if-Abfrage in einer anderen if-Abfrage schachteln.
// Aber vorsicht. Du musst ganz genau darauf achten, wie die if-Abfragen interagieren.
// Es hilft manchmal mit einer äußeren if/else
// -Abfrage zu beginnen diese mit Kommentaren zu füllen:

while(true) {
    var enemy = hero.findNearestEnemy();
    // Wenn es einen Gegner gibt, dann...
    if(enemy) {
        // Lege eine Varible "distance" mit der Hilfe von "distanceTo" an.
        var distance = hero.distanceTo(enemy);
        if (distance < 5) {
            hero.attack(enemy);
        }
        // Wenn der Gegner weniger als 5 Meter entfernt ist, dann attack()iere.
        
        // Sonst (der Gegner ist noch zu weit weg) benutze shield()
        
    // Sonst (es gibt keinen Gegner...)
    } else {
        // ... dann bewege dich zurück zum X.
        hero.moveXY(40, 34);
    }
}