let menuBtn = document.querySelector(".menu");
let navList = document.querySelector("ul");
let toggleBtn = document.querySelector(".toggle");
let headerEl = document.querySelector("header");

menuBtn.onclick = function () {
  navList.classList.toggle("active");
};

toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("fa-toggle-off");
  toggleBtn.classList.toggle("fa-toggle-on");
};

let navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    headerEl.classList.add("nav-bg");
  } else {
    headerEl.classList.remove("nav-bg");
  }
});
