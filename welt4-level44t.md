# CodeCombat Welt 4 Markdown
## Level 44 Agrippa Refaktoriert
```
function cleaveOrAttack(enemy) {
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } else {
    hero.attack(enemy);
    }
}

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var distance = hero.distanceTo(enemy);
        if(distance < 5) {
        }
    }
}
```
![alt text](image-126.png)