const navbarSlide = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".background-navbar-list");
  const navlinks = document.querySelectorAll(".navbar-list a");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("navbar-list-active");

    burger.classList.toggle("toggle");
  });

  navlinks.forEach((items) => {
    items.addEventListener("click", () => {
      navbar.classList.toggle("navbar-list-active");

      burger.classList.toggle("toggle");
    });
  });
};

navbarSlide();

// animation

gsap.from(".logo", {
  duration: 3,
  x: -50,
  opacity: 0,
});
gsap.from(".navbar-list", {
  duration: 3,
  x: 50,
  opacity: 0,
});
gsap.from(".burger", {
  duration: 3,
  x: 50,
  opacity: 0,
});
gsap.from(".heading", {
  duration: 3,
  x: 50,
  opacity: 0,
});
gsap.from(".body-copy-section", {
  duration: 3,
  y: 50,
  opacity: 0,
});
gsap.from(".body-copy-button", {
  duration: 3,
  y: 50,
  opacity: 0,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section",
    start: "30%",
    end: "100%",
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section",
    start: "50%",
    end: "100%",
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-section",
    start: "60%",
    end: "100%",
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    start: "60%",
    end: "100%",
  },
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-section",
    start: "70%",
    end: "100%",
  },
});

tl.from(".heading-second", {
  duration: 3,
  x: -40,
  opacity: 0,
  delay: 0.2,
});

tl2.from(".img", {
  duration: 3,
  x: 40,
  opacity: 0,
  delay: 0.2,
});

tl3.from(".body-copy-second", {
  duration: 3,
  x: -40,
  opacity: 0,
  delay: 0.2,
});

// tl4.from(".heading-third", {
//   duration: 2,
//   y: -40,
//   opacity: 0,
//   delay: 0.2,
// });

// tl5.from(".card-third-section", {
//   duration: 2,
//   y: 40,
//   opacity: 0,
//   delay: 0.2,
// });

gsap.from(".navbar-list a", {
  duration: 2,
  x: 100,
  opacity: 0,
  delay: 1.5,
});
