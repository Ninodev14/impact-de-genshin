backgroundMusic.play();
let etat = 0;
let menueEtat = 0;
let sky = 0;
let color = 0;
const menue = document.getElementById("scroll-menue");

window.addEventListener("scroll", function () {
  const hauteurDeScroll = window.scrollY;


  let hauteurApparition = 50;

  if (hauteurDeScroll > hauteurApparition) {
    menue.style.display = "block";
  } else {
    menue.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menue = document.getElementById("scroll-menue");
  const day = document.getElementById("day");
  const dayNav = document.getElementById("day-nav");
  const sond = document.getElementById("sond");
  const sondNav = document.getElementById("sond-nav");
  const h1Titre = document.getElementById("h1-titre");
  const h2Titre = document.getElementById("h2-titre");
  const h2 = document.getElementById("h2");
  const p = document.querySelectorAll("p");
  const gradient = document.getElementById("gradient-overlay");
  const separationHeader = document.getElementById("separation-svg-header");
  const body = document.body;
  const dayHomePage = document.getElementById("dayHomePage");
  const nightHomePage = document.getElementById("nightHomePage");
  const backgroundMusic = document.getElementById("backgroundMusic");
  const footer = document.getElementById("footer");
 
  function handleDayClick() {
    if ( sky == 0){
      body.classList.remove("night-mode");
      body.style.backgroundColor = "#212222"
      footer.style.backgroundColor = "#000000"
      gradient.style.background = "linear-gradient(0deg, #212222 1.48%, rgba(33, 34, 34, 0.00) 22.74%)";    
      dayHomePage.style.display = "block";
      nightHomePage.style.display = "none";
      day.src = "image/black-night.svg";
      dayNav.src = "image/white-night.svg";
      h1Titre.style.color = "#212222";
      h1Titre.style.textShadow = "0px 0px 8px rgba(f, f, f, 0.35)";
      h2Titre.style.color = "#212222";
      h2.style.color = "#fff";
      menue.style.backgroundColor = "#212222";
      p.forEach(p => {
        p.style.color = "#fff";
      });
      separationHeader.src = "image/header-limitation-black.svg";
      sky = 1;
      if(etat == 1) {
      sond.src = "image/black-mute.svg";
      sondNav.src = "image/white-mute.svg";
      color = 0;
    } else {
      sond.src = "image/black-on.svg";
      sondNav.src = "image/white-on.svg";
      color = 0;
    }
  }else {
    menue.style.backgroundColor = "#000";
    gradient.style.background = "linear-gradient(0deg, #FFF 1.48%, rgba(255, 255, 255, 0.00) 22.74%)";
    footer.style.backgroundColor = "#212222"
    body.style.backgroundColor = "#fff"
    body.classList.add("night-mode");
    dayHomePage.style.display = "none";
    nightHomePage.style.display = "block";
    day.src = "image/white-day.svg";
    dayNav.src = "image/white-day.svg";
    h1Titre.style.color = "#fff";
    h1Titre.style.textShadow = "0px 0px 8px rgba(0, 0, 0, 0.35)";
    h2Titre.style.color = "#fff";
    h2.style.color = "#212222";
    p.forEach(p => {
      p.style.color = "#212222";
    });
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
      sondNav.src = "image/white-mute.svg";
    }
    etat = 1;
  } else {
    if (color == 1) {
      sond.src = "image/white-on.svg";
      sondNav.src = "image/white-on.svg";
    } else {
      sond.src = "image/black-on.svg";
      sondNav.src = "image/white-on.svg";
    }
    etat = 0;
  }
}
sond.addEventListener("click", toggleMusic);
sondNav.addEventListener("click", toggleMusic);

function openOut() {
  if (menueEtat == 0) {
    menueEtat = 1;
  } else {
    menueEtat = 0;
  }
}

menue.addEventListener("click", openOut);

});