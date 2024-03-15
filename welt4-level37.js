// Du hast jetzt ein Haustier!

function speak(event) {
    // Dein Haustier sollte mit pet.say() antworten
    pet.say("hello");
}
// Hiermit wird deinem Haustier gesagt, die Funktion speak() auszuführen, wenn es etwas hört
pet.on("hear", speak);

// Sprich mit deinem Haustier!
hero.say("Hello Kitty");