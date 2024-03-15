// Diese Zwerge sind durch den Helden verschreckt!
// Wie auch immer, wenn sie nur genug Zwerge sind, dann werden sie sich zusammenrotten und hinterrücks angreifen! Sei vorsichtig!
// Wann immer du kannst, teile (cleave), um die Masse an Feinden auzulichten.

while(true) {
    var enemy = hero.findNearestEnemy();
    // Use an if-statement with isReady to check "cleave":
    if (hero.isReady("cleave")) {
    
        // Cleave!
        hero.cleave(enemy);
    // Else, if cleave is not ready:
    } else {
        // Attack the nearest ogre!
           hero.attack(enemy);
}
}