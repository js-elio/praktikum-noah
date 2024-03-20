// game.time ist die Zeit, die im Spiel vergangen ist.
game.spawnPlayerXY("guardian", 10, 35);
game.addSurviveGoal();
game.addDefeatGoal(5);

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

// game.time startet bei Null und zählt aufwärts in Sekunden
var spawnTime = 0;
while(true) {
    // spawnTime ist die Zeit zu der etwas erzeugt werden soll
    if(game.time > spawnTime) {
        // Erzeuge einen "Munchkin" bei 60,35
        game.spawnXY("munchkin", 60, 35);
        // Setze die spawnTime auf game.time plus 2
        // , so dass ein Gegner alle zwei Sekunden erzeugt wird.
       spawnTime = game.time + 2;
    }
}