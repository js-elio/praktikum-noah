// Spawn a maze. Change the number for a different maze!
game.spawnMaze("forest", 1);


// Spawn a hero with spawnPlayerXY(type, x, y)
var player = game.spawnPlayerXY("knight", 59, 18);
// Add at least one goal!
game.addMoveGoalXY(12, 60);
