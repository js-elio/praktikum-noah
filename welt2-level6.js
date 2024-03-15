// The player only needs to collect some of the gems.
game.spawnPlayerXY("knight", 39, 23);

// Use game.addCollectGoal(X) to allow the player to win
game.spawnXY("soldier", 10, 30);
// after collecting only X gems! (In this case, X should be 6)
game.addMoveGoalXY(70, 50);
game.addCollectGoal(6);
