// The only exit is blocked by ogres.
// Hide from the skeletons and defeat the ogres one by one.

// This function should attack an enemy and hide.
function hitOrHide(target) {
    // If 'target' exists:
    if (target) { 

        // Attack 'target'.
        hero.attack(target);
}
        // Then move to the red mark.
        
}

while (true) {
    hero.moveXY(33, 10);
    var enemy = hero.findNearestEnemy();
    hitOrHide(enemy);
}