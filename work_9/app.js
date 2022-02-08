const navbarItems = [...document.querySelectorAll(".navbar-item")],
  cardGroup = document.querySelector(".card-group");

window.addEventListener("load", () => {
  for (let i = 0; i < 10; i++) {
    cardGroup.innerHTML += `
      <div class="card">
        <img src="${data.image.blueFire}">
        <div class="card-body">
          <h3 class="title">${data.name.blueFire}</h3>
          <i class="fab fa-windows"></i>
          <div class="category">${data.category.blueFire}</div>
        </div>
        <div class="price">${data.price.free}</div>
      </div>
    `;
  }
});
// Navbar item'leri her birini map'leyerek click olduqda active clasini deyisirem
function removeActive() {
  navbarItems.map((item) => {
    item.classList.remove("active");
  });
}
function writeCard(gameName) {
  cardGroup.innerHTML = ''
  for (let i = 0; i < 10; i++) {
    cardGroup.innerHTML += `
    <div class="card">
      <img src="${data.image[gameName]}">
      <div class="card-body">
        <h3 class="title">${data.name[gameName]}</h3>
        <i class="fab fa-windows"></i>
        <div class="category">${data.category[gameName]}</div>
      </div>
      <div class="price">${data.price.free}</div>
    </div>
  `;
  }
}
navbarItems.map((item, index) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
    writeCard(arr[index]);
  });
});

const arr = ["blueFire", "honored", "csgo", "apexLegends"];

const data = {
  image: {
    blueFire:
      "https://cdn.akamai.steamstatic.com/steam/apps/1793350/capsule_184x69.jpg?t=1644018884",
    honored:
      "https://cdn.akamai.steamstatic.com/steam/apps/1846990/capsule_184x69.jpg?t=1643990023https://cdn.akamai.steamstatic.com/steam/apps/1793350/capsule_184x69.jpg?t=1644018884",
    csgo: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_184x69.jpg?t=1641233427",
    apexLegends:
      "https://cdn.akamai.steamstatic.com/steam/apps/1172470/capsule_184x69.jpg?t=1638900075"
  },
  name: {
    blueFire: "Blue Fire: Void Maker",
    honored: "Honored",
    csgo: "Counter-Strike: Global Offensive",
    apexLegends: "Apex Legends"
  },
  price: {
    free: "Free",
    freeToPlay: "Free To Play",
    myPrice: "100000$"
  },
  category: {
    blueFire: ["Free To Play", " Level Editor", " Platformer"],
    honored: ["Action", " Adventure", " RPG", " Magic"],
    csgo: ["FPS", " Shooter", " Multiplayer", " Competitive"],
    apexLegends: ["Free To Play", " Battle Royale", " Multiplayer", " Shooter"]
  }
};
