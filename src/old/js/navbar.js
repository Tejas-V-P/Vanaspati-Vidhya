// js/navbar.js — Navbar scroll behaviour & mobile menu

(function () {
  const navbar      = document.getElementById('navbar');
  const hamBtn      = document.getElementById('hamburgerBtn');
  const navLinks    = document.getElementById('navLinks');
  const allSections = document.querySelectorAll('section[id], div[id]');

  /* ── Scroll: shadow + active link ── */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Highlight the current section's nav link
    let current = '';
    allSections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });

    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Mobile hamburger toggle ── */
  hamBtn.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamBtn.classList.toggle('open', isOpen);
    hamBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when any nav link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamBtn.classList.remove('open');
      hamBtn.setAttribute('aria-expanded', false);
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamBtn.classList.remove('open');
      hamBtn.setAttribute('aria-expanded', false);
    }
  });
})();
