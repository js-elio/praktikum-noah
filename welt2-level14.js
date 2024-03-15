// Okar möchte die nervigen Zwer-Oger loswerden.
// Leider ist er langsam und seine Attacken machen wenig Schaden.
// Zum Glück hast du als Spieleentwickler*in volle Kontrolle über die Welt.
// Ändere Okars Eigenschaften, damit er in der Lage ist, die Oger zu besiegen.
// Du findest die Standardwerte für die Einheiten auf der Dokumentationstafel.

game.addDefeatGoal(6);
game.addSurviveGoal();
var player = game.spawnPlayerXY("goliath", 12, 10);
// Erhöhe die maximale Geschwindigkeit (maxSpeed >4), damit er schneller rennt.
player.maxSpeed = 12;
// Erhöhe die maximale Gesundheit des Spieles (maxHealth > 500), damit er länger übersteht.
player.maxHealth = 600;
// Erhöhe die Angriffskraft (attackDamage; > 7.68), damit er schnell die Oger besiegen kann.
player.attackDamage = 9001;