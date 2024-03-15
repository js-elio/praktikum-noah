// Each game must have a player and a goal.

// Use game.spawnPlayerXY("captain", x, y)
var player = game.spawnPlayerXY("captain", 36, 30);
// to add a player to your game:
// Use game.addMoveGoalXY(x, y)
game.addMoveGoalXY(46, 30);
// to add a movement goal to your game:
// it should be 10m away from the player.
game.spawnXY("fence", 36, 41);
// If you want to, use spawnXY("fence", x, y)
game.spawnXY("fence", 41, 30);
// to make a maze with fences...
game.spawnXY("fence", 36, 35);
game.spawnXY("fence", 41, 25);
// Then, click "Test Level" to try your first playable game!
