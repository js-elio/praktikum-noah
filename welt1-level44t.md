# CodeCombat Welt 1 Markdown
## Level 44 Zerstörerischer Engel
```
hero.moveDown();
hero.moveRight(2);
hero.moveDown();
hero.moveDown();
hero.moveRight();
hero.moveUp(3);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}
```
![Alt text](image-47.png)