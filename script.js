const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("section[id]");
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
    if (window.innerWidth > 900) setMenuOpen(false);
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

if ("IntersectionObserver" in window) {
  const activeNavObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${visible.target.id}`
        );
      });
    },
    { rootMargin: "-24% 0px -68% 0px", threshold: [0, 0.15, 0.4] }
  );

  sections.forEach((section) => activeNavObserver.observe(section));
}
