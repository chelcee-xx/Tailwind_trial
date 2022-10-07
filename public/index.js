const burger= document.querySelector(".menu")
const menu = document.querySelector(".navbar")
burger.addEventListener("click", ()=> {
    menu.classList.toggle("hidden");
})