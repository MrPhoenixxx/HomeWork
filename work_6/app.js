let hero = document.querySelector(".hero")
let button = document.querySelector(".darkmode-button")
console.log(hero.classList)
button.addEventListener('click', () => {
  hero.classList.toggle("dark")
})