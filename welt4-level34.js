// Benutze die Funktion checkAndAttack, damit sich dein Code gut liest.

// Diese Funktion hat einen Parameter.
// Mit einem Parameter kann man Daten in eine Funktion übergeben.
function checkAndAttack() {
    // Der Parameter ‘target‘ ist nur eine Variable!
    // Es enthält das Argument, wenn die Funktion aufgerufen wurde
    
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.attack(enemy);
    }
    hero.moveXY(43, 34);
}

while(true) {
    hero.moveXY(58, 52);
    checkAndAttack();
}
    // Gehe zur unteren X-Markierung.