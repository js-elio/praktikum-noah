// Eine andere Kiste im Feld, die der Held aufbrechen kann!
// Greife die Kiste an, um sie aufzubrechen.
// Manche Zwerge sehen nicht tatenlos zu, wie du es angreifst!
// Verteidige dich, wenn ein Zwerg zu nahe kommt.

while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if(hero.isReady("cleave")) {
        // Oberste Priorität ist es, zu spalten, wenn die Attacke bereit ist:
        hero.cleave(enemy);
    } else if(distance < 5) {
        // Greife den nächsten Zwerg an, der zu nah rankommt:
        hero.attack(enemy);
    } else {
        // Ansonsten versuche, die Kiste aufzubrechen:
        // Use the name of the chest to attack: "Chest".
        hero.attack("Chest");
    }
}