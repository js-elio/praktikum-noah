// Vergiss nicht, dass Feinde der Feind jetzt noch nicht da sein muss.
while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
     
        
        // Wenn ein Feind da ist, greife es an!
           hero.attack(enemy);
        hero.attack(enemy);
    }
}