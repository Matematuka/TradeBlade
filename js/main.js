const burger = document.querySelector(".burger");
const mobileNav = document.querySelector("#mobileNav");
const closeNav = document.querySelector("#closeNav");
const mobileLinks = document.querySelectorAll(".mobile-nav__link");

burger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  burger.classList.toggle("active", isOpen);
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  burger.classList.remove("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    burger.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dealsSwiper = new Swiper(".deals-swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: false,
  });

  const bar = document.querySelector(".deals-progress__bar");

  function updateProgress(sw) {
    if (!bar) return;

    const total = sw.slides.length;
    const index = sw.activeIndex;
    const pct = ((index + 1) / total) * 100;

    bar.style.width = pct + "%";
  }

  updateProgress(dealsSwiper);

  dealsSwiper.on("slideChange", () => updateProgress(dealsSwiper));
});
