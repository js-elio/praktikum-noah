# CodeCombat Welt 4 Markdown
## Level 51 Münzenkrümel
```
while (true) {
    // So wird das nächste Item gefunden.
    var item = hero.findNearestItem();
    if (item) {
        var itemPosition = item.pos;
        var itemX = itemPosition.x;
        var itemY = itemPosition.y;
        hero.moveXY(8, 32);
        hero.moveXY(24, 32);
        hero.moveXY(24, 9);
        hero.moveXY(56, 9);
        hero.moveXY(56, 57);
        hero.moveXY(72, 56);
    }
}
```
![alt text](image-132.png)