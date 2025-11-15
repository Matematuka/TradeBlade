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

    breakpoints: {
      420: {
        spaceBetween: 20,
      },
    },

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

const tabs = document.querySelectorAll(".pricing-tabs .tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelectorAll(".dropdown").forEach((drop) => {
  const btn = drop.querySelector(".dropdown-btn");
  const list = drop.querySelector(".dropdown-list");
  const value = drop.querySelector(".dropdown-value");
  const icon = drop.querySelector(".dropdown-icon");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = drop.classList.contains("open");

    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== drop) {
        d.classList.remove("open");
        const ic = d.querySelector(".dropdown-icon");
        if (ic) ic.src = "img/arrow_bottom.svg";
      }
    });

    if (!isOpen) {
      drop.classList.add("open");
      icon.src = "img/arrow_top.svg";
    } else {
      drop.classList.remove("open");
      icon.src = "img/arrow_bottom.svg";
    }
  });

  list.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", (ev) => {
      ev.stopPropagation();
      value.textContent = li.dataset.value;
      drop.classList.remove("open");
      icon.src = "img/arrow_bottom.svg";
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((d) => {
    d.classList.remove("open");
    const ic = d.querySelector(".dropdown-icon");
    if (ic) ic.src = "img/arrow_bottom.svg";
  });
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-btn");
  const icon = item.querySelector(".faq-icon");

  btn.addEventListener("click", () => {
    // Закриваємо інші
    document.querySelectorAll(".faq-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        const otherIcon = i.querySelector(".faq-icon");
        otherIcon.src = "img/arrow_bottom_dark.svg"; // ← темна стрілка
      }
    });

    // Тогл для поточного
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.src = "img/arrow_top.svg"; // ← біла стрілка
    } else {
      icon.src = "img/arrow_bottom_dark.svg"; // ← темна стрілка
    }
  });
});
