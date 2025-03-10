document.getElementById("scaryButton").addEventListener("click", function() {
    let mj = document.getElementById("mj-container");
    let audio = document.getElementById("mjAudio");
    let knightBtn = document.getElementById("knightButton");

    mj.style.display = "block";
    mj.style.animation = "moonwalk 4s linear forwards";
    audio.play();

    // Show knight button after MJ appears
    setTimeout(() => {
        knightBtn.style.display = "block";
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

    // MJ disappears
    setTimeout(() => {
        mj.style.display = "none";
        audio.pause();
        audio.currentTime = 0;
        speech.style.display = "block";
    }, 2500);

    // Reset to homepage
    setTimeout(() => {
        document.getElementById("homepage").style.display = "block";
        knight.style.display = "none";
        speech.style.display = "none";
        document.getElementById("knightButton").style.display = "none";
    }, 5000);
});
