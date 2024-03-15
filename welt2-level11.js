// Beschwöre einen Helden und füge ein Ziel hinzu,
game.spawnPlayerXY("champion", 40, 15);
game.addDefeatGoal();
game.addMoveGoalXY(13, 57);
// Beschwöre mindestens 2 "munchkin"s.
game.spawnXY("munchkin", 15, 13);
game.spawnXY("munchkin", 12, 12);
// Beschwöre mindestens 2 "thrower"s.
game.spawnXY("thrower", 57, 57);
game.spawnXY("thrower", 55, 55);
game.spawnXY("thrower", 13, 55);
game.spawnXY("thrower", 15, 57);
// Beschwöre mindestens 2 "soldier"s.
game.spawnXY("soldier", 40, 20);+
game.spawnXY("soldier", 36, 20);
// Beschwöre mindestens 2 "archer"s.
game.spawnXY("archer", 36, 30);
game.spawnXY("archer", 40, 28);
