// Players like seeing score, so use ui.track()!
// It will create a user-interface element for them to see.
var player = game.spawnPlayerXY("samurai", 20, 20);



var spawner = game.spawnXY("generator", 50, 50);
spawner.maxHealth = 9001;
spawner.spawnType = "munchkin";
// Add more spawners for more enemies on the field:
var spawner = game.spawnXY("generator", 26, 60);
spawner.maxHealth = 9001;
spawner.spawnType   = "munchkin";
// ui.track() displays an object's property for players to see!
// Use ui.track to track game's "defeated" property:
ui.track(game, "defeated")

// Increase the hero's maxSpeed:
player.maxSpeed = 10;
player.attackDamage = 100;
// Press play and defeat 6 munchkins or skeletons!
game.addDefeatGoal(6); 
ui.track(game, "time");
game.addSurviveGoal(20);
