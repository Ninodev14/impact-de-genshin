document.addEventListener("DOMContentLoaded", function() {
    const dayButton = document.getElementById("dayButton");
    const nightButton = document.getElementById("nightButton");
    const body = document.body;
    const dayHomePage = document.getElementById("dayHomePage");
    const nightHomePage = document.getElementById("nightHomePage");
    const toggleMusicButton = document.getElementById("toggleMusic");
    const backgroundMusic = document.getElementById("backgroundMusic");
  
    dayButton.addEventListener("click", function() {
      body.classList.remove("night-mode");
      dayHomePage.style.display = "block";
      nightHomePage.style.display = "none";
    });
  
    nightButton.addEventListener("click", function() {
      body.classList.add("night-mode");
      dayHomePage.style.display = "none";
      nightHomePage.style.display = "block";
    });


  function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}


toggleMusicButton.addEventListener("click", toggleMusic);
});