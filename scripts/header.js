const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav ul");

// Toggle the 'show' class when hamburger is clicked
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Remove the 'show' class on scroll if it's present
window.addEventListener("scroll", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

// entrance animations
ScrollReveal().reveal(".keywords .one", { delay: 500 });
ScrollReveal().reveal(".keywords .two", { delay: 900 });
ScrollReveal().reveal(".keywords .three", { delay: 1300 });

ScrollReveal().reveal(".hero-content h3", {
  delay: 1500,
  origin: "bottom",
  duration: 1000,
  distance: "50px",
});

ScrollReveal().reveal(".hero-content a", { delay: 2300 });
