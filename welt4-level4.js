// Besiege die Oger aus ihrem eigenen Lager heraus!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) 
    hero.attack(enemy);
    }
    // Benutze ein `if-statement`, um zu prüfen, ob ein Gegner existiert:    
        // Greife den Gegner an, falls er existiert.