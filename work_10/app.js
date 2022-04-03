import * as index from './index.js'

console.log(index.name, index.surname, index.default())
const root = document.getElementById("root"),
  button = document.querySelector("button"),
  table = document.querySelector("table");

const xhr = new XMLHttpRequest();
xhr.onload = function () {
  const data = JSON.parse(this.responseText);

  let i = 0;
  button.addEventListener("click", () => {
    if (i < data.length) {
      table.innerHTML +=  `
        <tr>
          <td>${i + 1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].IMDB_Rating.toPrecision(2)}</td>
          <td>${data[i].year}</td>
        </tr>
      `
      i++;
    } else {
      alert("Elave edilecek yeni veri yoxdur")
    }
  })
};

xhr.open("GET", "./movie.json", true);
xhr.send();
