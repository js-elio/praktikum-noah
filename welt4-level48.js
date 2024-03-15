// Write an event handler function called onHear

// Complete the onHear function
function onHear(event) {
    // The pet should say something in onHear.
    pet.say("Ja");
    pet.say("Ja");
    pet.say("17");
    pet.say("Gut");
    pet.say("Ja");
}
pet.on("hear", onHear);

hero.say("Verstehst du mich?");
hero.say("Bist du ein Puma?");
hero.say("Wie alt bist du?");
// Stelle zwei weitere Fragen.
hero.say("Wie geht es dir");
hero.say("Bist du Stark");