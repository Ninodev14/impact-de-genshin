backgroundMusic.play();
let etat = 0;
let sky = 0;
let color = 0;
var menue = document.getElementById("scroll-menue");

window.addEventListener("scroll", function () {
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
  const dayNav = document.getElementById("day-nav");
  const sond = document.getElementById("sond");
  const sondNav = document.getElementById("sond-nav");
  const h1 = document.getElementById("h1");
  const h2 = document.getElementById("h2");
  const separationHeader = document.getElementById("separation-svg-header");
  const body = document.body;
  const dayHomePage = document.getElementById("dayHomePage");
  const nightHomePage = document.getElementById("nightHomePage");
  const backgroundMusic = document.getElementById("backgroundMusic");
 
  function handleDayClick() {
    if ( sky == 0){
      body.classList.remove("night-mode");
      dayHomePage.style.display = "block";
      nightHomePage.style.display = "none";
      day.src = "image/black-night.svg";
      dayNav.src = "image/black-night.svg";
      h1.style.color = "#212222";
      h1.style.textShadow = "0px 0px 8px rgba(f, f, f, 0.35)";
      h2.style.color = "#212222";
      separationHeader.src = "image/header-limitation-black.svg";
      sky = 1;
      if(etat == 1) {
      sond.src = "image/black-mute.svg";
      sondNav.src = "image/black-mute.svg";
      color = 0;
    } else {
      sond.src = "image/black-on.svg";
      sondNav.src = "image/black-on.svg";
      color = 0;
    }
  }else {

    body.classList.add("night-mode");
    dayHomePage.style.display = "none";
    nightHomePage.style.display = "block";
    day.src = "image/white-day.svg";
    dayNav.src = "image/white-day.svg";
    h1.style.color = "#fff";
    h1.style.textShadow = "0px 0px 8px rgba(0, 0, 0, 0.35)";
    h2.style.color = "#fff";
    separationHeader.src = "image/header-limitation-white.svg";
    sky = 0;
    if(etat == 1) {
    sond.src = "image/white-mute.svg";
    sondNav.src = "image/white-mute.svg";
    color = 1;
  } else {
    sond.src = "image/white-on.svg";
    sondNav.src = "image/white-on.svg";
    color = 1;
  }
}
  };

day.addEventListener("click", handleDayClick);
dayNav.addEventListener("click", handleDayClick);

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }

  if (etat == 0) {
    if (color == 1) {
      sond.src = "image/white-mute.svg";
      sondNav.src = "image/white-mute.svg";
    } else {
      sond.src = "image/black-mute.svg";
      sondNav.src = "image/black-mute.svg";
    }
    etat = 1;
  } else {
    if (color == 1) {
      sond.src = "image/white-on.svg";
      sondNav.src = "image/white-on.svg";
    } else {
      sond.src = "image/black-on.svg";
      sondNav.src = "image/black-on.svg";
    }
    etat = 0;
  }
}
sond.addEventListener("click", toggleMusic);
sondNav.addEventListener("click", toggleMusic);

});