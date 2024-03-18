# CodeCombat Welt 4 Markdown
## Level 40 Tomb Raider
```
function checkToDefend(target) {
    var enemy = hero.findNearestEnemy();
        if (enemy) {
            hero.attack(enemy);
        }
        hero.attack("Door");
}

while(true) {
    var enemy = hero.findNearestEnemy();
    checkToDefend(enemy);
}