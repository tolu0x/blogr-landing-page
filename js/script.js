const ul_element = document.querySelector("#sub-connect");
const nav = document.querySelector("#nav");
const icon_navbar = document.querySelector("#nav-icon");
const arrow = document.querySelector('#connect').lastChild;
const arrow_logo = document.querySelector('.arrow');
let toggle_connect = false;
let nav_toggle = false;
const control = document.querySelector("#nav-toggle");
const connect = document.querySelector('#connect');

control.addEventListener("click", () => {
    control.classList.toggle('toggle');
    nav.classList.toggle('nav-active')

    nav.style.display = 'block';
});

connect.addEventListener("click", () => {
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