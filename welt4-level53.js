// Folge dem Lichtstein, um durch die Fallen zu navigieren.
while (true) {
    var item = hero.findNearestItem();
    if (item) {
        // Speichere die Position des Elements in einer neuen Variablen mit Hilfe von item.pos:
        var itemPosition = item.pos;
        // Speichere die X- und Y-Koordinaten mit pos.x und pos.y:
        var itemX = itemPosition.x;
        var itemY = itemPosition.y;
        // Bewege dich mit moveXY() und den Variablen X und Y zu den Koordinaten:
        hero.moveXY(8, 36);
        hero.moveXY(24, 35);
        hero.moveXY(24, 11);
        hero.moveXY(40, 11);
        hero.moveXY(56, 23);
        hero.moveXY(72, 12);
        hero.moveXY(72, 58);
    }
}