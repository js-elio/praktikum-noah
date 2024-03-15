// Generatoren erschaffen immer wieder Gegner.
// Skelette ("skeleton") fürchten sich vor Leuchtsteinen.
var player = game.spawnPlayerXY("champion", 15, 35);
player.attackDamage = 60;
player.maxSpeed = 8;
game.addSurviveGoal();
game.addDefeatGoal();
game.spawnXY("x-mark-stone", 60, 35);
// Erschaffe einen "generator".
var generator = game.spawnXY("generator", 62, 53);
// Erschaffe einen Leuchstein ("lighstone").
var lighstone = game.spawnXY("lightstone", 45, 47);
// Now beat your game!
