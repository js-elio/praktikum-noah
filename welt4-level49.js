// Du kannst den Bauern nicht über den Fluss helfen.
// Aber dein Haustier kann es!
// Bringe deinem Wolf bei, ein Wachhund zu sein.
function onSpawn(event) {
    while (true) {
        // Haustiere können auch Feinde finden.
        var enemy = pet.findNearestEnemy();
        // Wenn es einen Gegner gibt:
            if (enemy) {
            // Lasse das Tier anschließend etwas sagen:
            pet.say("munchkin");
            }
    }
}
pet.on("spawn", onSpawn);