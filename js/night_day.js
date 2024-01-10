backgroundMusic.play();
let etat = 0;
let color = 0;
var menue = document.getElementById("scroll-menue");

window.addEventListener("scroll", function() {
  var hauteurDeScroll = window.scrollY;


  let hauteurApparition = 50;

  if (hauteurDeScroll > hauteurApparition) {
    menue.style.display = "block";
  } else {
    menue.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const day = document.getElementById("day");
  const night = document.getElementById("night");
  const sond = document.getElementById("sond");
  const sondNav = document.getElementById("sond-nav");
  const body = document.body;
  const dayHomePage = document.getElementById("dayHomePage");
  const nightHomePage = document.getElementById("nightHomePage");
  const backgroundMusic = document.getElementById("backgroundMusic");

  day.addEventListener("click", function () {
    body.classList.remove("night-mode");
    dayHomePage.style.display = "block";
    nightHomePage.style.display = "none";
    day.src = "image/black-day.svg";
    night.src = "image/black-night.svg";
    day.style.cursor = "default";
    night.style.cursor = "pointer";
    if (etat == 1) {
      sond.src = "image/black-mute.svg"; 
      color = 0;
    } else {
      sond.src = "image/black-on.svg";
      color = 0;
    }
  });

  night.addEventListener("click", function () {
    body.classList.add("night-mode");
    dayHomePage.style.display = "none";
    nightHomePage.style.display = "block";
    day.src = "image/white-day.svg";
    day.style.cursor = "pointer";
    night.style.cursor = "default";
    night.src = "image/white-night.svg";
    if (etat == 1) {
      sond.src = "image/white-mute.svg"; 
      color = 1;
    } else {
      sond.src = "image/white-on.svg";
      color = 1;
    }
  });


  function toggleMusic() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }
  sond.addEventListener("click", toggleMusic);
  sondNav.addEventListener("click", toggleMusic);
  sond.addEventListener("click", function () {
    if (etat == 0) {
      if (color == 1) {
        sond.src = "image/white-mute.svg";
      } else {
        sond.src = "image/black-mute.svg";
        
      }
      sondNav.src = "image/black-mute.svg"; 
      etat = 1;
    } else {
      if (color == 1) {
        sond.src = "image/white-on.svg"; 
      } else {
        sond.src = "image/black-on.svg"; 
      }
      etat = 0;
      sondNav.src = "image/black-on.svg";
    }
  });

  sondNav.addEventListener("click", function () {
    if (etat == 0) {
      if (color == 1) {
        sond.src = "image/white-mute.svg"; 
      } else {
        sond.src = "image/black-mute.svg"; 
      }
      sondNav.src = "image/black-mute.svg";
      etat = 1;
    } else {
      if (color == 1) {
        sond.src = "image/white-on.svg"; 
      } else {
        sond.src = "image/black-on.svg"; 
      }
      etat = 0;
      sondNav.src = "image/black-on.svg";
    }
  });


});