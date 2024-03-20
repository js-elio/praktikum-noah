# CodeCombat Welt 2 Markdown 
## Level 24 Armee Training 2
```
game.spawnXY("soldier", 35, 20);
game.spawnXY("soldier", 45, 20);
game.spawnXY("archer", 44, 16);
game.spawnXY("archer", 36, 16);
function fightEnemies(event) {
    while(true) {
        var friendUnit = event.target;
        var enemy = friendUnit.findNearestEnemy();
        friendUnit.attack(enemy);
    }
}
game.setActionFor("soldier", "spawn", fightEnemies);
game.setActionFor("archer", "spawn", fightEnemies);
```
![alt text](image-145.png)