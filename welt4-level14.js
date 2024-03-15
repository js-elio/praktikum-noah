// Patrouilliere die Dorfzugänge.
// Wenn du einen Feind vorfindest, greife ihn an.
while(true) {
    hero.moveXY(35, 34);
    var leftEnemy = hero.findNearestEnemy();
    if (leftEnemy) 
        hero.attack(leftEnemy);
    
    
    // Nun weiter zum rechten Zugang.
    hero.moveXY(60, 32);

    // Finde den Feind auf der rechten Seite.
        
    // Verwende "if", um anzugreifen, wenn dort ein Feind(right enemy) ist. 
    var rightEnemy= hero.findNearestEnemy();
    
    if (rightEnemy)  
        hero.attack(rightEnemy);  
    }