// Benutze game.randomInteger(min,max) um den Zufall einzuführen!
game.spawnPlayerXY("knight", 40, 35);
game.addSurviveGoal();
game.addDefeatGoal(8);

function onSpawn(event) {
    while(true) {
        var unit = event.target;
        var enemy = unit.findNearestEnemy();
        if(enemy) {
            unit.attack(enemy);
        }
    }
}

game.setActionFor("munchkin", "spawn", onSpawn);

// Erzeuge alle alle 0-4 Sekunden einen Oger.
var spawnTime = 0;
while(true) {
    if(game.time > spawnTime) {
        // Erzeuge einen "munckin" an einer zufälligen Position.
        // Weise x eine zufällige Nummer zwischen 10 und 70 zu.
        var x = game.randomInteger(10, 70);
        // Weise y eine zufällige Nummer zwischen 10 und 60 zu.
        
        // Erzeuge einen "munchkin" bei x, y
        game.spawnXY("munchkin", 11, 30);
   
   
      
        // Der nächste "spawn" innerhalb von 0 bis 4 Sekunden
        spawnTime = game.time + game.randomInteger(0,4);
    }
}