while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        // Finde die Distanze zum Feind mit distanceTo
        var distance = hero.distanceTo(enemy);
        // Wenn der Abstand weniger als 5 Meter ist...
        if (distance<5) {
            hero.attack(enemy);
        }
            // ...und "cleave" bereit ist, cleave!
            if (hero.isReady("cleave"))
             hero.cleave(enemy);
            // ... wenn nicht, führe eine normale Attacke aus.
           hero.attack(enemy);
            
    }
}
