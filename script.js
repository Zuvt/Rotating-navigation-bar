const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const nav = document.querySelector(".nav");

openNav.addEventListener("click", () => {
  container.classList.add("show-nav");
  circle.style.transform = "rotate(-90deg)";
  nav.style.transform = "translateX(0%)";
});
closeNav.addEventListener("click", () => {
  container.classList.remove("show-nav");
  circle.style.transform = "rotate(0deg)";
  nav.style.transform = "translateX(-100%)";
});
