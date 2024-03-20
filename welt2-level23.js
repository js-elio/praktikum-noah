// Add a soldier to the level to prevent ogres from crossing the path.
// Command the soldier using an event handler function.

function soldierLogic() {
    game.spawnXY("soldier", 55, 35);
    // Fill in the code for the soldier's actions here.
    // Remember to use 'soldier' instead of 'hero'!
    while(true) {
        var enemy = soldier.findNearestEnemy();
        // Attack the enemy, if the enemy exists.
        if (enemy) {
            // Units have the attack() method.
            soldier.attack(enemy);
            // Use soldier.attack(enemy) method:
         
        }
        // Else, move back to the starting position.
        else {
            // Units have the moveXY() method.
            game.addMoveGoalXY(48, 33);
        }
    }
}