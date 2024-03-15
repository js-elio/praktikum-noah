// Finde einen Weg durch den Wald, aber sei wachsam!
// In diesen Kammern könnten Oger sein!

hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// Die if-Anweisung wird prüfen ob eine Variable einen Oger hat.
if(enemy) {
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(49, 51);
var enemy = hero.findNearestEnemy();
    
    // Greife den Feind hier an:
hero.attack(enemy);

hero.moveXY(58, 14);
enemy = hero.findNearestEnemy();
// Nutze eine if-Anweisung um zu prüfen ob ein Feind existiert.
if(enemy)
    // Wenn ein Find existiert, greife ihn an:
    hero.attack(enemy);
