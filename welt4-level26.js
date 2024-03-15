// Überlebe beide Wellen durch das Schild-Hochhalten und Spalten (shield und cleave).
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } 
    // Wenn "cleave" nicht bereit ist, benutze deine "shield" Fähigkeit
    else {
        hero.shield();
    }
    // Du benötigt mindeten 142 Gesundheit, um zu überleben.
    }
    