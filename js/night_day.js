backgroundMusic.play();
let etat = 0;
let menuEtat = 0;
let sky = 0;
let color = 0;
const barreMenu = document.getElementById("barre-menu");
const closeMenu = document.getElementById("close-nav");
const menue = document.getElementById("scroll-menue");
const menueNav = document.getElementById("sanditch-nav");
const dayMenue = document.getElementById("day-menue");
const sondMenue = document.getElementById("sond-menue");
const conteneurFlou = document.getElementById("conteneur-flou");
const scrollDown = document.getElementById("scroll-down");
const scrollTopButton = document.getElementById('scroll-top');

document.addEventListener("DOMContentLoaded", function () {
  
  const dayNav = document.getElementById("day-nav");
  const sondNav = document.getElementById("sond-nav");
  const h1Titre = document.getElementById("h1-titre");
  const h2Titre = document.getElementById("h2-titre");
  const h2 = document.getElementById("h2");
  const h3 = document.querySelectorAll("#h3");
  const a = document.querySelectorAll("#a");
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
      dayHomePage.style.display = "none";
      nightHomePage.style.display = "block";
      dayNav.src = "image/white-day.svg";
      scrollDown.src = "image/scroll-black.svg";
      dayMenue.src = "image/white-day.svg";
      h1Titre.style.color = "#ffffff";
      h1Titre.style.textShadow = "0px 0px 8px rgba(0, 0, 0, 0.35)";
      h2Titre.style.color = "#ffffff";
      h2.style.color = "#fff";
      menue.style.backgroundColor = "#000";
      barreMenu.style.backgroundColor = "#000";
      scrollTopButton.src = "image/white-scroll.svg"
      h3.forEach(h3 => {
        h3.style.color = "#fff";
      });
      a.forEach(a => {
        a.style.color = "#D2BB8E";
      });
      p.forEach(p => {
        p.style.color = "#fff";
      });
      separationHeader.src = "image/header-limitation-white.svg";
      sky = 1;
      if(etat == 1) {
      sondNav.src = "image/white-on.svg";
      sondMenue.src = "image/white-on.svg";
      color = 0;
    } else {
      sondNav.src = "image/white-mute.svg";
      sondMenue.src = "image/white-mute.svg";
      color = 0;
    }
  }else {
    
    barreMenu.style.backgroundColor = "#212222";
    menue.style.backgroundColor = "#212222";
    gradient.style.background = "linear-gradient(0deg, #FFF 1.48%, rgba(255, 255, 255, 0.00) 22.74%)";
    footer.style.backgroundColor = "#212222"
    body.style.backgroundColor = "#fff"
    body.classList.add("night-mode");
    scrollDown.src = "image/scroll-white.svg";
    dayHomePage.style.display = "block";
    nightHomePage.style.display = "none";
    dayNav.src = "image/white-night.svg";
    dayMenue.src = "image/white-night.svg";
    h1Titre.style.color = "#212222";
    h1Titre.style.textShadow = "0px 0px 8px rgba(0, 0, 0, 0.35)";
    h2Titre.style.color = "#212222";
    scrollTopButton.src = "image/black-scroll.svg"
    h2.style.color = "#212222";
    h3.forEach(h3 => {
      h3.style.color = "#212222";
    });
    p.forEach(p => {
      p.style.color = "#212222";
    });
    a.forEach(a => {
      a.style.color = "#3B8CD4";
    });
    separationHeader.src = "image/header-limitation-black.svg";

    sky = 0;
    if(etat == 1) {
    sondNav.src = "image/white-on.svg";
    sondMenue.src = "image/white-on.svg";
    color = 1;
  } else {
    sondNav.src = "image/white-mute.svg";
    sondMenue.src = "image/white-mute.svg";
    color = 1;
  }
}
  };

dayMenue.addEventListener("click", handleDayClick);
dayNav.addEventListener("click", handleDayClick);

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }

  if (etat == 0) {
    if (color == 1) {
      sondNav.src = "image/white-on.svg";
      sondMenue.src = "image/white-on.svg";
    } else {
      sondNav.src = "image/white-on.svg";
      sondMenue.src = "image/white-on.svg";
    }
    etat = 1;
  } else {
    if (color == 1) {
      sondNav.src = "image/white-mute.svg";
      sondMenue.src = "image/white-mute.svg";
    } else {
      sondNav.src = "image/white-mute.svg";
      sondMenue.src = "image/white-mute.svg";
    }
    etat = 0;
  }
}
sondNav.addEventListener("click", toggleMusic);
sondMenue.addEventListener("click", toggleMusic);

function openOut() {

  if (menuEtat == 0) {
    document.body.style.overflow = 'hidden';
    menuEtat = 1;
    barreMenu.style.transform = "translateX(0)";
    console.log(menuEtat)
    menue.style.display = "none";
    conteneurFlou.style.display = "block";

  } else {
    document.body.style.overflow = 'visible'
    menuEtat = 0;
    barreMenu.style.transform = "translateX(100vw)";
    menue.style.display = "block";
    conteneurFlou.style.display = "none";
    console.log(menuEtat)
  }
  
}

conteneurFlou.addEventListener("click", openOut);
menueNav.addEventListener("click", openOut);
closeMenu.addEventListener("click", openOut);
});


let currentPosition = 0;

function animateElement() {
  if (currentPosition === 0) {
    scrollDown.style.transform = 'translateY(-20px)';
    currentPosition = 1;
  } else {
    scrollDown.style.transform = 'translateY(0)';
    currentPosition = 0;
  }
}

setInterval(animateElement, 1000);



window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.add('active');
  } else {
    scrollTopButton.classList.remove('active');
  }
});

scrollTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});