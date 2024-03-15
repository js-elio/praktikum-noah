// Ein vergessenes Grab im Walde!
// Aber die Oger sind dir auf den Fersen.
// Brich die Grabkammer auf, während du dich gegen die Zwerge verteidigst.

// Diese Funktion sollte einen Gegner angreifen, falls einer existiert, greife ansonsten die Tür an!
function checkToDefend(target) {
    // Prüfe, ob das Ziel existiert
    var enemy = hero.findNearestEnemy();
        // Wenn ja, greife das Ziel an
        if (enemy) {
            hero.attack(enemy);
        }
        // Greife sonst die „Tür“ an
        hero.attack("Door");
}

while(true) {
    var enemy = hero.findNearestEnemy();
    checkToDefend(enemy);
}