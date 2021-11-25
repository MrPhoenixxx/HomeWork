const list = document.querySelectorAll("li");
const contentText = document.querySelectorAll(".content section div.choose");
// console.log(list);
for (let i = 0; i < 7; i++) {
  list[i].addEventListener("click", () => {
    if (list[i].classList.value == "active") {
      // it's active
    } else {
      for (let i = 0; i < 7; i++) {
        list[i].classList.remove("active");
      }
      list[i].classList.add("active");
      for (let i = 0; i < 7; i++) {
        contentText[i].classList.remove("visible");
      }
      contentText[i].classList.add("visible");
    }
  });
}
