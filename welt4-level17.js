// Die Kommandos nach einer If-Anweisung werden nur dann ausgeführt. wenn die Bedingung wahr ist.
// Repariere alle If-Anweisungen, um das Level zu schlagen.

// == bedeutet "ist gleich mit".
hero.moveXY(15, 40);  // Gehe zu den ersten Minen.
hero.moveXY(25, 15); 
hero.moveXY(25, 15);  
var enemy = hero.findNearestEnemy();
hero.attack(enemy);
hero.moveXY(55, 25);