// Wenn ein Feind in der Nähe ist, greife ihn an.
// Andernfalls, greife die Truhe an.

while(true) {
    // Verwende if/else.
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
}
    hero.attack("Chest");
}