const links = document.getElementsByClassName('nav__link');
const side_nav = document.getElementById("side-nav");
const overlay_background = document.getElementById('overlay');

let side_nav_status = false;

links[2].addEventListener('click', function () {
    activeNav();
});

links[4].addEventListener('click', function () {
    activeNav();
});

document.getElementById('close_side_nav').addEventListener('click', function () {
    activeNav();
});

function activeNav() {
    side_nav_status = !side_nav_status;
    if (!side_nav_status)
    {
        overlay_background.style.display = "none";
        side_nav.style.width = "0";
    }
    else {
        overlay_background.style.display = "block";
        if (window.innerWidth <= 768)
            side_nav.style.width = window.innerWidth + "px";
        else
            side_nav.style.width = "35rem";
    }
}
