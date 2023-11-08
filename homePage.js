const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

}))
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;
  
function fadeIn() {
    setInterval(show, 200);
}
  
