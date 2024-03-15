// Wenn du einen Kommentar nicht kennst, schaue links neben das Code-Fenster!

// Erschaffe einen Held mit game.spawnPlayerXY(type, x, y).
var player = game.spawnPlayerXY("knight", 36, 30);
// Füge mit game.addDefeatGoal() ein Spielziel hinu
game.addDefeatGoal(4);

game.addMoveGoalXY(60, 30)


game.spawnXY("munchkin", 40, 10);
// Erschaffe mindestens drei weitere Kleinoger (Munchkins)
game.spawnXY("munchkin", 63, 40);
game.spawnXY("munchkin", 36, 50);
game.spawnXY("munchkin", 15, 30);
