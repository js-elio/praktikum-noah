// Pass an argument to addSurviveGoal() to specify a time.


// This means the player must survive for 20 seconds.
game.addSurviveGoal(20);

// Spawn a generator with spawnXY
// Use the variable to configure the generator below
// Set the generator's spawnType to "munchkin".
var generator = game.spawnXY("generator", 30, 50);
generator.spawnType = "munchkin";
// Use spawnPlayerXY to spawn a hero for the player.
var player = game.spawnPlayerXY("knight", 15, 15);
// Set the player's maxHealth to at least 100
player.maxSpeed = 100;
// Set the player's attackDamage to at least 10
player.attackDamage = 9001;
// Play the game!
