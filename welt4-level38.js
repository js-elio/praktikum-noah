// Du bist in einer Kropffalle gefangen!
// Schicke dein Haustier los, um die Heiltränke zu holen!

function goFetch() {
    // Du kannst Schleifen in einer Handler-Funktion benutzen.
    while(true) {
        var potion = hero.findNearestItem();
        if(potion) {
            // Benutze pet.fetch(), damit dein Haustier einen Trank holt:
            pet.fetch(potion)
         }
    }
}

// Wenn dein Haustier heraufbeschworen ist, löst es ein „spawn“-Event aus.
// Damit führt dein Haustier goFetch() zu Beginn des Levels aus
pet.on("spawn", goFetch);