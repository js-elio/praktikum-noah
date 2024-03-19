// Attack munchkins, call brawlers and ignore burls.

// This function defines the hero's behaviour about enemies.
function dealEnemy(enemy) {
    // If enemy.type is "munchkin":
        // Then attack it:
    // If the enemy's type is "brawler":
        // Then say something to call the brawler:
}

while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    else if (enemy.type == "burl") {
        hero.say("I don't think it's a good idea");
        hero.moveXY(30, 34);
    }
}