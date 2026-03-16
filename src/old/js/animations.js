// js/animations.js — Scroll Reveal, Counter Animations, Ticker

/* ══════════════════════════════════════════
   1.  SCROLL REVEAL
   ══════════════════════════════════════════ */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  // Stagger siblings inside grid containers
  revealEls.forEach((el, i) => {
    const delay = (i % 4) * 0.1;
    el.style.transitionDelay = delay + 's';
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // once is enough
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
})();


/* ══════════════════════════════════════════
   2.  ANIMATED STAT COUNTERS
   ══════════════════════════════════════════ */
(function initCounters() {
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  if (!statNums.length) return;

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800; // ms
    const step     = 16;   // ~60fps
    const totalSteps = duration / step;
    let current = 0;

    const timer = setInterval(() => {
      current += target / totalSteps;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, step);
  }

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach(el => counterObserver.observe(el));
})();


/* ══════════════════════════════════════════
   3.  PLANT TICKER (scrolling banner)
   ══════════════════════════════════════════ */
(function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const items = [
    { emoji: '🌿', name: 'Tulsi',      latin: 'Ocimum tenuiflorum' },
    { emoji: '🌳', name: 'Neem',       latin: 'Azadirachta indica' },
    { emoji: '🌾', name: 'Turmeric',   latin: 'Curcuma longa' },
    { emoji: '🌸', name: 'Ashwagandha',latin: 'Withania somnifera' },
    { emoji: '🪴', name: 'Aloe Vera',  latin: 'Aloe barbadensis' },
    { emoji: '🫐', name: 'Amla',       latin: 'Phyllanthus emblica' },
    { emoji: '🔵', name: 'Brahmi',     latin: 'Bacopa monnieri' },
    { emoji: '🍃', name: 'Giloy',      latin: 'Tinospora cordifolia' },
    { emoji: '🌺', name: 'Shatavari',  latin: 'Asparagus racemosus' },
    { emoji: '🍂', name: 'Triphala',   latin: 'Three Sacred Fruits' },
  ];

  // Double the items so the loop is seamless
  const allItems = [...items, ...items];

  allItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'ticker-item';
    div.innerHTML = `<span class="ticker-item-emoji">${item.emoji}</span>
                     <span><strong>${item.name}</strong> — <em>${item.latin}</em></span>`;
    track.appendChild(div);
  });
})();


/* ══════════════════════════════════════════
   4.  EASTER EGG — Konami Code → Leaf Rain 🌿
   ══════════════════════════════════════════ */
(function initEasterEgg() {
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown',
                  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let seq = [];

  // Inject keyframe animation
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes leafRainFall {
      0%   { transform: translateY(-60px) rotate(0deg);   opacity: 1; }
      100% { transform: translateY(110vh)  rotate(720deg); opacity: 0; }
    }`;
  document.head.appendChild(styleEl);

  document.addEventListener('keydown', e => {
    seq.push(e.key);
    seq = seq.slice(-10);
    if (seq.join(',') === KONAMI.join(',')) launchLeafRain();
  });

  function launchLeafRain() {
    const emojis = ['🌿','🍃','🌱','🍀','🌾','🌸','🪴','🫐'];
    for (let i = 0; i < 45; i++) {
      setTimeout(() => {
        const el       = document.createElement('span');
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        const size     = 1.4 + Math.random() * 2.2;
        const dur      = 2.2 + Math.random() * 3;
        el.style.cssText = [
          'position:fixed',
          `top:-60px`,
          `left:${Math.random() * 100}vw`,
          `font-size:${size}rem`,
          'z-index:9999',
          'pointer-events:none',
          'user-select:none',
          `animation:leafRainFall ${dur}s linear forwards`
        ].join(';');
        document.body.appendChild(el);
        setTimeout(() => el.remove(), (dur + 0.5) * 1000);
      }, i * 90);
    }
  }
})();
