// Create your own game!

// Spawn a player with spawnPlayerXY(type, x, y)
var player = game.spawnPlayerXY("knight", 46, 36);
game.spawnXY("archer", 36, 30);
var lightstone = game.spawnXY("lightstone", 50, 40);
var lightstone = game.spawnXY("lightstone", 60, 50);
game.spawnXY("potion-small", 50, 50);
// Add at least one goal!
game.addMoveGoalXY(73,  61);
// Spawn objects into the game with spawnXY(type, x, y)
var generator = game.spawnXY("generator", 68, 58)