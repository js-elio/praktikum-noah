// Der Spieler muss nur ein paar Gegner besiegen.
game.spawnPlayerXY("guardian", 60, 25);

// 
// after defeating X enemies! (In this case, X should be 4)
game.addDefeatGoal(4);
game.addMoveGoalXY(25, 55);
