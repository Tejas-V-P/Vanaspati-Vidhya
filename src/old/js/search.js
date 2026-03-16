// js/search.js — Search Bar & Category Filter Logic
// Works alongside React plant cards: hides/shows .plant-card elements

(function initSearch() {
  const input    = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  const msgEl    = document.getElementById('searchMessage');
  const noRes    = document.getElementById('noResults');

  if (!input) return;

  /* ─── Core filter function ─── */
  function filterPlants(query) {
    // React may render cards asynchronously; use a live query
    const cards = document.querySelectorAll('.plant-card');
    const q     = query.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const searchTarget = [
        card.dataset.searchName  || '',
        card.dataset.searchCat   || '',
        card.dataset.searchLatin || '',
      ].join(' ').toLowerCase();

      const show = !q || searchTarget.includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    // No-results message
    if (noRes) noRes.style.display = (q && visible === 0) ? 'block' : 'none';

    // Status message
    if (msgEl) {
      if (!q) {
        msgEl.textContent = '';
      } else if (visible === 0) {
        msgEl.textContent = `No plants found for "${query}". Try "Tulsi", "Brahmi" or "Neem".`;
      } else {
        msgEl.textContent = `Showing ${visible} plant${visible !== 1 ? 's' : ''} for "${query}"`;
      }
    }

    // Show/hide clear button
    if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
  }

  /* ─── Event listeners ─── */
  input.addEventListener('input', debounce(() => {
    filterPlants(input.value);
  }, 180));

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      filterPlants('');
      input.focus();
    });
  }

  // Scroll to plants section when search bar is focused
  input.addEventListener('focus', () => {
    const plantsSection = document.getElementById('plants');
    if (plantsSection) {
      setTimeout(() => smoothScrollTo('#plants'), 120);
    }
  });

  /* ─── Expose globally so React filter buttons can call it ─── */
  window.doPlantSearch = filterPlants;
})();


/* ══════════════════════════════════════════
   Category filter (called from React PlantFilter component)
   ══════════════════════════════════════════ */
window.filterByCategory = function (cat) {
  const cards  = document.querySelectorAll('.plant-card');
  const noRes  = document.getElementById('noResults');
  const input  = document.getElementById('searchInput');
  const msgEl  = document.getElementById('searchMessage');

  // Clear search bar when filtering by category
  if (input)  input.value = '';
  if (msgEl)  msgEl.textContent = '';
  const clearBtn = document.getElementById('clearSearch');
  if (clearBtn) clearBtn.style.display = 'none';

  let visible = 0;
  cards.forEach(card => {
    const cardCat = card.dataset.searchCat || '';
    const show = (cat === 'all' || cardCat.includes(cat));
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
};
