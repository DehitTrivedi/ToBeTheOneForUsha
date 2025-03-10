document.getElementById("revealButton").addEventListener("click", function() {
    let message = document.getElementById("hiddenMessage");
    message.style.display = "block";
});

// Michael Jackson Moonwalk
document.getElementById("scaryButton").addEventListener("click", function() {
    let mj = document.getElementById("mj-container");
    let bubble = document.getElementById("thoughtBubble");

    mj.style.display = "block";
    mj.style.animation = "moonwalk 4s linear forwards";
    
    bubble.style.display = "block";
    bubble.style.animation = "bubbleFade 3s linear";
});

// Knight Battle Animation
document.getElementById("knightButton").addEventListener("click", function() {
    let knight = document.getElementById("stick-figure-container");
    let speech = document.getElementById("knightSpeech");

    knight.style.display = "block";
    knight.style.animation = "knightFight 3s linear forwards";

    setTimeout(() => {
        speech.style.display = "block";
    }, 3000);

    // Hide everything after 5 seconds
    setTimeout(() => {
        knight.style.display = "none";
        speech.style.display = "none";
    }, 5000);
});
