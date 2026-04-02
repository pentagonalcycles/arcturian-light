// Mobile navigation toggle + copyright year
document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('nav-open');
    });
  }

  // Close mobile nav when a nav link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Copyright year
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
