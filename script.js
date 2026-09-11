const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const certificateWall = document.querySelector(".certificate-wall");
const certificateToggle = document.querySelector(".certificate-toggle");

const setMenuOpen = (isOpen) => {
  if (!navToggle || !siteNav) return;
  siteNav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    setMenuOpen(!siteNav.classList.contains("is-open"));
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) return;
    if (siteNav.contains(event.target) || navToggle.contains(event.target)) return;
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !siteNav.classList.contains("is-open")) return;
    setMenuOpen(false);
    navToggle.focus();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMenuOpen(false);
  });
}

navLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

if (certificateWall && certificateToggle) {
  const certificateCards = [...certificateWall.querySelectorAll(".certificate-card")];
  const featuredCount = 8;

  const setCertificatesExpanded = (isExpanded) => {
    certificateCards.slice(featuredCount).forEach((card) => {
      card.hidden = !isExpanded;
    });
    certificateWall.classList.toggle("is-expanded", isExpanded);
    certificateToggle.setAttribute("aria-expanded", String(isExpanded));
    certificateToggle.textContent = isExpanded
      ? "Show fewer certificates"
      : `Show all ${certificateCards.length} certificates`;
  };

  setCertificatesExpanded(false);
  certificateToggle.addEventListener("click", () => {
    setCertificatesExpanded(certificateToggle.getAttribute("aria-expanded") !== "true");
  });
}

const updateActiveNavigation = () => {
  let activeLink = navLinks[0];
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section && section.getBoundingClientRect().top <= 110) activeLink = link;
  });
  navLinks.forEach((link) => {
    const active = link === activeLink;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

let navigationFrame = 0;
window.addEventListener("scroll", () => {
  if (navigationFrame) return;
  navigationFrame = requestAnimationFrame(() => {
    navigationFrame = 0;
    updateActiveNavigation();
  });
}, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
updateActiveNavigation();
