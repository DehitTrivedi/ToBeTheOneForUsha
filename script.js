document.getElementById("surpriseButton").addEventListener("click", function() {
    let surpriseText = document.getElementById("surpriseText");
    surpriseText.style.display = "block";
});

// Michael Jackson Moonwalk
document.getElementById("scaryButton").addEventListener("click", function() {
    let mj = document.getElementById("mj-container");
    let audio = document.getElementById("mjAudio");
    let knightContainer = document.getElementById("knightContainer");

    mj.style.display = "block";
    mj.style.animation = "moonwalk 4s linear infinite";
    audio.play();

    // Show knight button after MJ appears
    setTimeout(() => {
        knightContainer.style.display = "block";
    }, 2000);
});

// Knight fights MJ
document.getElementById("knightButton").addEventListener("click", function() {
    let knight = document.getElementById("stick-figure-container");
    let speech = document.getElementById("knightSpeech");
    let mj = document.getElementById("mj-container");
    let audio = document.getElementById("mjAudio");

    knight.style.display = "block";
    knight.style.animation = "knightFight 2s linear forwards";

    setTimeout(() => {
        mj.style.display = "none";
        audio.pause();
        speech.style.display = "block";
    }, 2500);

    setTimeout(() => {
        window.location.reload();
    }, 5000);
});
