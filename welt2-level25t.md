# CodeCombat Welt 2 Markdown 
## Level 25 Center Formation
```
function centerFormation(event) {
    var unit = event.target;
    unit.moveXY(40, 36);
}
game.spawnXY("soldier", 16, 57);
game.spawnXY("soldier", 15, 13);
game.spawnXY("soldier", 63, 13);
game.spawnXY("soldier", 67, 57);
game.setActionFor("soldier", "spawn", centerFormation);
```
![alt text](image-146.png)