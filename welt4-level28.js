// Oger durchstreifen den Wald!
// Nutze die distanceTo-Methode, um herauszufinden, wo die Feinde sind.
// Sage die Entfernung für jeden Feind um der Artillerie mitzuteilen, wohin sie schießen soll!

var enemy1 = "Gort";
var distance1 = hero.distanceTo(enemy1);
hero.say(distance1);

var enemy2 = "Smasher";
var distance2 = hero.distanceTo(enemy2);
// Sage die distance2-Variable (say)
hero.say(distance2);
// Schieße nicht auf deine Freunde!
var friend3 = "Charles";
// The last ogre.
var enemy4 = "Gorgnub";
// Finde und sage die Entfernung der übrigen Feinde:
var distance4 = hero.distanceTo(enemy4);
hero.say(distance4);