# CodeCombat Welt 2 Markdown 
## Level 27 Chokepoint
```
function defendLane(event) {
    var unit = event.target;
    var startX = unit.pos.x;    
    while(true) {
        var enemy = unit.findNearestEnemy();
        if (enemy) {
            unit.attack(enemy)
        }
        else {
            unit.moveXY(startX, 16);
        }
        
    }
}
game.spawnXY("soldier", 9, 16);
game.spawnXY("soldier", 30, 16);
game.spawnXY("soldier", 54, 16);
game.spawnXY("soldier", 75, 16);
game.setActionFor("soldier", "spawn", defendLane)
```