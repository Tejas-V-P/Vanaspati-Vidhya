// components/App.jsx — Root React bootstrap
// Mounts all React components into their DOM placeholders

(function mountReactComponents() {
  const { createRoot } = ReactDOM;

  /* ── 1. Plant Filter Buttons ── */
  const filterRoot = document.getElementById('plant-filter-root');
  if (filterRoot) {
    createRoot(filterRoot).render(React.createElement(PlantFilter));
  }

  /* ── 2. Plants Grid ── */
  const gridRoot = document.getElementById('plants-grid-root');
  if (gridRoot) {
    createRoot(gridRoot).render(
      React.createElement(PlantsGrid, { plants: PLANTS_DATA })
    );
  }

  /* ── 3. Quiz App ── */
  const quizRoot = document.getElementById('quiz-root');
  if (quizRoot) {
    createRoot(quizRoot).render(
      React.createElement(QuizApp, { questions: QUIZ_DATA })
    );
  }

  /* ── 4. After React renders, trigger scroll-reveal on new cards ── */
  setTimeout(() => {
    const newRevealEls = document.querySelectorAll('.reveal:not([style*="transition"])');
    newRevealEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 0.08 + 's';
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    document.querySelectorAll('.plant-card.reveal').forEach(el => observer.observe(el));
  }, 100);
})();
