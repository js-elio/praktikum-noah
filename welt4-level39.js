// Wir müssen den Namen von unserem neuem Haustier wissen.

// Benutze diese Funktion als Handler, um Events an pet zu „hören“.
function onHear(event) {
    // Diese Funktion nicht ändern.
    pet.say("Miau Schnurr Miau");
    pet.say("Schnurr Schnurr");
    pet.say("Miau");
    pet.say("Miau");
    pet.say("Miau Schnurr Miau Miau");
}
// Benutze die Methode pet.on(eventType, eventHandler)
pet.on("hear", onHear);
// Assign the onHear function to handle "hear" events.
onHear();

while(true) {
// Es muss nach dem “pet.on“ sein.
hero.say("Was ist dein Name, Kumpel?");
pet.say("Lucas");
hero.say("Kannst du das wiederholen?");
pet.say("Lucas");
}