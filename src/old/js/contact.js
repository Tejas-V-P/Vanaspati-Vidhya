// js/contact.js — Contact Form Validation & Submission

(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  /* ── Live validation helper ── */
  function showError(input, msg) {
    clearError(input);
    input.style.borderColor = 'var(--red-500)';
    const err = document.createElement('p');
    err.className    = 'field-error';
    err.textContent  = msg;
    err.style.cssText = 'color:var(--red-500);font-size:0.78rem;margin-top:4px;font-weight:500;';
    input.parentNode.appendChild(err);
  }

  function clearError(input) {
    input.style.borderColor = '';
    const existing = input.parentNode.querySelector('.field-error');
    if (existing) existing.remove();
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ── Validate on blur ── */
  form.querySelectorAll('input[required], textarea[required]').forEach(field => {
    field.addEventListener('blur', () => {
      if (!field.value.trim()) {
        showError(field, 'This field is required.');
      } else if (field.type === 'email' && !validateEmail(field.value)) {
        showError(field, 'Please enter a valid email address.');
      } else {
        clearError(field);
      }
    });
    field.addEventListener('input', () => clearError(field));
  });

  /* ── Submit ── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Full validation sweep
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
      if (!field.value.trim()) {
        showError(field, 'This field is required.');
        valid = false;
      } else if (field.type === 'email' && !validateEmail(field.value)) {
        showError(field, 'Please enter a valid email address.');
        valid = false;
      }
    });

    if (!valid) return;

    // Simulate async submission
    const submitBtn  = form.querySelector('button[type="submit"]');
    submitBtn.disabled   = true;
    submitBtn.textContent = '⏳ Sending…';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled   = false;
      submitBtn.textContent = '🌿 Send Message';
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 7000);
      }
    }, 1200);
  });
})();
