
let menuEtat = 0;
let sky = 0;

const barreMenu = document.getElementById("barre-menu");
const closeMenu = document.getElementById("close-nav");
const menue = document.getElementById("scroll-menue");
const menueNav = document.getElementById("sanditch-nav");
const dayMenue = document.getElementById("day-menue");
const conteneurFlou = document.getElementById("conteneur-flou");
const h2 = document.querySelectorAll(".h2");
const h3 = document.querySelectorAll(".h3");
const p = document.querySelectorAll(".p");


document.addEventListener("DOMContentLoaded", function () {

    const dayNav = document.getElementById("day-nav");
    const body = document.body;
    const footer = document.getElementById("footer");

    function handleDayClick() {
        if (sky == 0) {
            body.classList.remove("night-mode");
            body.style.backgroundColor = "#212222"
            footer.style.backgroundColor = "#000000"
            dayNav.src = "image/white-night.svg";
            dayMenue.src = "image/white-night.svg";
            menue.style.backgroundColor = "#000";
            barreMenu.style.backgroundColor = "#000";
            sky = 1;
            h2.forEach(h2 => {
                h2.style.color = "#fff";
            });
            h3.forEach(h3 => {
                h3.style.color = "#fff";
            });
            p.forEach(p => {
                p.style.color = "#fff";
            });

        } else {
            body.style.backgroundColor = "#ffffff"
            barreMenu.style.backgroundColor = "#212222";
            menue.style.backgroundColor = "#212222";
            footer.style.backgroundColor = "#212222"
            body.style.backgroundColor = "#fff"
            body.classList.add("night-mode");
            dayNav.src = "image/white-day.svg";
            dayMenue.src = "image/white-day.svg";
            sky = 0;

            h2.forEach(h2 => {
                h2.style.color = "#212222";
            });
            h3.forEach(h3 => {
                h3.style.color = "#212222";
            });
            p.forEach(p => {
                p.style.color = "#212222";
            });
        }
    };

    dayMenue.addEventListener("click", handleDayClick);
    dayNav.addEventListener("click", handleDayClick);

    function openOut() {

        if (menuEtat == 0) {
            menuEtat = 1;
            barreMenu.style.transform = "translateX(0)";
            console.log(menuEtat)
            menue.style.display = "none";
            conteneurFlou.style.display = "block";

        } else {
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