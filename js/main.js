const burger = document.querySelector(".burger");
const mobileNav = document.querySelector("#mobileNav");
const closeNav = document.querySelector("#closeNav");
const mobileLinks = document.querySelectorAll(".mobile-nav__link");

// ВІДКРИТТЯ / ЗАКРИТТЯ ПО БУРГЕРУ
burger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  burger.classList.toggle("active", isOpen);
});

// ЗАКРИТТЯ ПО ХРЕСТИКУ
closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  burger.classList.remove("active");
});

// ЗАКРИТТЯ ПРИ ПЕРЕХОДІ ПО ЛІНКАХ
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("active");
  });
});
