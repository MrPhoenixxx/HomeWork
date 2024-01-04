//! Languagebar is visible and hidden

const x = document.querySelector('.headerLanguage')
document.querySelector('.language').addEventListener('click', () => {
  x.classList.toggle('visible')
} )

//! Infobar is active and inactive

const leftInfoBar = document.querySelector('.leftInfoBar')
document.querySelector('.icon-info').addEventListener('click', () => {
  leftInfoBar.classList.toggle('active')
})
document.querySelector('.infoBar-closeButton').addEventListener('click', () => {
  leftInfoBar.classList.toggle('active')
})