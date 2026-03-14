// smooth scroll

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})


// mobile menu

const menuToggle = document.getElementById("menu-toggle")
const navMenu = document.getElementById("nav-menu")

menuToggle.onclick = () => {

navMenu.classList.toggle("active")

}


// dark mode

document.getElementById("darkToggle").onclick = function(){

document.body.classList.toggle("dark")

}


// scroll animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el))