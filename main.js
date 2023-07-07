const hamburger = document.querySelector(".ham")
const menu = document.querySelector(".topnav")

hamburger.onclick=()=>{
    menu.classList.toggle('open')
}