# CodeCombat Welt 4 Markdown
## Level 25 Backwoods Standoff A 
```
while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        if (hero.isReady("cleave")) 
        hero.cleave(enemy);
                else {
            var enemy = hero.findNearestEnemy();
              hero.attack(enemy);
        }
    }
}
```
![alt text](image-113.png)