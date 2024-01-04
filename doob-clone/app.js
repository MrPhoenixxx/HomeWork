let hero = document.querySelector(".hero")
let button = document.querySelector(".darkmode-button")
const active = document.querySelector(".active")
const inActive = document.querySelector(".inActive")

button.addEventListener('click', () => {
  hero.classList.toggle("dark")
  if ( hero.classList.length == 2 ) {
    active.classList.remove("active")
    active.classList.add("inActive")
    inActive.classList.remove("inActive")
    inActive.classList.add("active")
  }
  else {
    active.classList.remove("inActive")
    active.classList.add("active")
    inActive.classList.remove("active")
    inActive.classList.add("inActive")
  }
})

//! Birinci saat uygulamasi
const time = document.querySelector(".time")
const date = document.querySelector(".date")
console.log([...time.classList][1])
setInterval(clock, 1000)
function clock() {
  const _date = new Date()
  time.innerHTML = `
    ${_date.getHours().toString().padStart(2, "0")} :
    ${_date.getMinutes().toString().padStart(2, "0")} :
    ${_date.getSeconds().toString().padStart(2, "0")}
  `
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const month = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
  date.innerHTML = `
    ${weekDays[_date.getDay()]},
    ${month[_date.getMonth()]},
    ${_date.getDate()},
    ${_date.getFullYear()}
  `
  if ([...time.classList][1] == "animate") {
    time.classList.remove("animate")
  }
  else {
    time.classList.add("animate")
  }
  (function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  time.style.color = color
  date.style.color = color
  })();
}

//! Ikinci saat uygulamasi
const clock2 = document.querySelector(".clock2");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


setInterval(() => {
  const _date2 = new Date();
  let hh = _date2.getHours() * 30;
  let mm = _date2.getMinutes() * 6;
  let ss = _date2.getSeconds() * 6;

  hours.style.transform = `translate(-50%, -100%) rotateZ(${(hh) + (mm/12)}deg)`;
  minutes.style.transform = `translate(-50%, -100%) rotateZ(${(mm) + (ss/60)}deg)`;
  seconds.style.transform = `translate(-50%, -100px) rotateZ(${ss}deg)`;
}, 1000);