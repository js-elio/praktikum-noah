// Folge der Münzenspur bis zum roten X beim Ausgang.

while (true) {
    // So wird das nächste Item gefunden.
    var item = hero.findNearestItem();
    if (item) {
        // Hiermit wird die pos (also Position) des Items in einer Variable gespeichert.
        var itemPosition = item.pos;
        // Packe die X- und Y-Koordinaten des Items in Variablen.
        var itemX = itemPosition.x;
        var itemY = itemPosition.y;
        // Benutze nun moveXY, um zu itemX und itemY zu gehen:
        hero.moveXY(8, 32);
        hero.moveXY(24, 32);
        hero.moveXY(24, 9);
        hero.moveXY(56, 9);
        hero.moveXY(56, 57);
        hero.moveXY(72, 56);
    }
}