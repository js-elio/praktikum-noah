// Besiege die Ogre indem Du diese Einheiten mit Steuerungsbefehlen anführst.

// Erschaffe 2 "soldier"s.
game.spawnXY("soldier", 35, 20);
game.spawnXY("soldier", 45, 20);
// Erschaffe 2 "archer"s.
game.spawnXY("archer", 44, 16);
game.spawnXY("archer", 36, 16);
function fightEnemies(event) {
    while(true) {
        // event.target ist die Einheit, die den Steuerungsbefehl ausführt!
        var friendUnit = event.target;
        var enemy = friendUnit.findNearestEnemy();
        // Lasse die befreundete Einheit (friendUnit) den Feind angreifen (attack())!
        friendUnit.attack(enemy);
    }
}

// Dies hängt den fightEnemies Steuerungsbefehl an alle Soldaten (soldiers) "spawn" Ereignisse an.
game.setActionFor("soldier", "spawn", fightEnemies);

// Füge jetzt fightEnemies zu den Bogenschützen (archers) "spawn" events hinzu:
game.setActionFor("archer", "spawn", fightEnemies);