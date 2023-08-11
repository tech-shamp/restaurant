const nav = document.querySelector("header")
const navbar = document.querySelector(".navbar")
const menu = document.querySelector("#menu-icon")

window.onscroll = () => {
  navbar.classList.remove("active")
  scrollFunction()
}

menu.addEventListener("click", NavAtive)

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
}

function NavAtive() {
  navbar.classList.toggle("active")
}
