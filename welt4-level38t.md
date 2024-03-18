# CodeCombat Welt 4 Markdown
## Level 38 Holen gehen
```
function goFetch() {
    while(true) {
    var potion = hero.findNearestItem();
    if(potion) {
        pet.fetch(potion)
        }
    }
}
pet.on("spawn", goFetch);
```
![alt text](image-122.png)