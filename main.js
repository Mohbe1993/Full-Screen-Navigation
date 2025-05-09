let tog = document.querySelector(".tog");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

tog.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
