const menu = document.querySelector(".nav__hamburger--enabled")

const toggleMenu = () => {
    let hiddenMenu = document.querySelector(".nav")
    hiddenMenu.style.opacity = parseInt(hiddenMenu.style.opacity) ? 0 : 1
}

menu.addEventListener("click", toggleMenu)