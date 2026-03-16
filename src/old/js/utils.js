// js/utils.js — Shared Utility Functions

/**
 * Smooth scroll to a section, accounting for navbar height
 * @param {string} href - e.g. "#plants"
 */
function smoothScrollTo(href) {
  const target = document.querySelector(href);
  if (!target) return;
  const navH = document.getElementById('navbar')?.offsetHeight || 72;
  const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Attach smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      smoothScrollTo(href);
    }
  });
});

/**
 * Debounce helper
 * @param {Function} fn
 * @param {number} delay
 */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Sanitise a string to safely set as innerHTML
 * Only allows <strong> and <em> tags
 */
function sanitiseHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/&lt;strong&gt;/g, '<strong>')
    .replace(/&lt;\/strong&gt;/g, '</strong>')
    .replace(/&lt;em&gt;/g, '<em>')
    .replace(/&lt;\/em&gt;/g, '</em>');
}
