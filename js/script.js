let ul_element = document.querySelector("#sub-connect");
let nav = document.querySelector("#nav");
let icon_navbar = document.querySelector("#nav-icon");
let arrow = document.querySelector('#connect').lastChild;
let arrow_logo = document.querySelector('.arrow');
let toggle_connect = false;
let nav_toggle = false;

document.querySelector("#nav-toggle").addEventListener("click", () => {
    nav_toggle = !nav_toggle;
    if ( nav_toggle){
        nav.style.display = 'flex';
        icon_navbar.src = '../assets/icons/icon-close.svg';
    } else{
        nav.style.display = 'none';
        icon_navbar.src = '../assets/icons/icon-hamburger.svg';
    }
});

document.querySelector('#connect').addEventListener("click", (e) => {
    toggle_connect = !toggle_connect;
    if (toggle_connect){
        ul_element.style.display = 'block';
        arrow_logo.style.transform = "rotate(-180deg)";
    } else {
        ul_element.style.display = 'none';
        arrow_logo.style.transform = "rotate(0deg)";
    }
});

window.onload = function (){
    if (screen.width < 1000){
        arrow_logo.src = "../assets/icons/icon-arrow-dark.svg";
    }
}