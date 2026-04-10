// Toggle hamburger menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("active");

  // Animate hamburger
  hamburger.classList.toggle("active");
}

// Close menu when clicking on links
document.querySelectorAll(".header-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");

  if (!header.contains(e.target)) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(20, 20, 20, 0.98)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "rgba(20, 20, 20, 0.95)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Toggle profile description
function toggleInfo(e) {
  e.preventDefault();

  const hiddenTexts = document.querySelectorAll(".hidden-text");
  const button = document.querySelector(".more-info");

  hiddenTexts.forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });

  // Ganti text tombol
  if (button.innerText === "More Info") {
    button.innerText = "Less Info";
  } else {
    button.innerText = "More Info";
  }
}

// work experience
