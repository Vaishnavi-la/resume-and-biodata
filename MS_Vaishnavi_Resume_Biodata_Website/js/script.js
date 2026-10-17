document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
  }

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formMessage.textContent = "Thank you! Your message has been submitted.";
      form.reset();
    });
  }
});
