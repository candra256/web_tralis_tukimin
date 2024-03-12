// toggle untuk hamberger memu


const navbarNav = document.querySelector(".navbar-nav");
// ketika hamberger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
     navbarNav.classList.toggle("active");
     e.prefentdefault();

};



// klik diluar side bar untuk menghilangkan navbar
const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function(e) {
     if(!hamburgerMenu.contains(e.target) && !(navbarNav.contains(e.target)))
     navbarNav.classList.remove("active");
})