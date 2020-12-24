const links = document.getElementsByClassName('nav__link');
const side_nav = document.getElementById("side-nav");
const overlay_background = document.getElementById('side__nav-overlay');

let side_nav_status = false;

links[2].addEventListener('click', () => {
    activeNav();
});

links[5].addEventListener('click', () => {
    activeNav();
});

overlay_background.addEventListener('click', () =>{
    activeNav();
});

document.getElementById('close_side_nav').addEventListener('click', () => {
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
            side_nav.style.width = "25rem";
    }
}
