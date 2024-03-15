function cleaveOrAttack(enemy) {
    // Wenn "cleave" bereit ist, setze es ein; ansonsten greif an.
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } else {
    hero.attack(enemy);
    }
}

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var distance = hero.distanceTo(enemy);
        if(distance < 5) {
            // Rufe die „cleaveOrAttack“-Funktion auf, oben definiert.
            cleaveOrAttack(enemy);
        }
    }
}
