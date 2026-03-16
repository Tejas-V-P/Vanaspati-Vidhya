import React from 'react';

export default function Doshas() {
  return (
    <section id="doshas" className="section doshas-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Ayurvedic Framework</div>
          <h2 className="section-title">The Three Doshas</h2>
          <p className="section-sub">Ayurveda's tridosha theory classifies all human constitutions into three bio-energetic forces — the original precision medicine system.</p>
        </div>
        <div className="doshas-grid">
          <div className="dosha-card vata reveal">
            <div className="dosha-symbol">💨</div>
            <h3 className="dosha-name">Vata</h3>
            <div className="dosha-element">Air + Space</div>
            <p>Governs movement, breathing, nervous system, and circulation. Vata types are creative, energetic, and quick — but prone to anxiety, dryness and insomnia when imbalanced.</p>
            <ul className="dosha-herbs"><li>🌿 <strong>Balancing herbs:</strong> Ashwagandha, Shatavari, Brahmi</li><li>🌿 <strong>Taste:</strong> Sweet, Sour, Salty</li><li>🌿 <strong>Season:</strong> Late Autumn, Winter</li></ul>
          </div>
          <div className="dosha-card pitta reveal">
            <div className="dosha-symbol">🔥</div>
            <h3 className="dosha-name">Pitta</h3>
            <div className="dosha-element">Fire + Water</div>
            <p>Governs digestion, metabolism, intelligence, and transformation. Pitta types are focused, ambitious, and passionate — but prone to inflammation, anger and acidity when imbalanced.</p>
            <ul className="dosha-herbs"><li>🌿 <strong>Balancing herbs:</strong> Shatavari, Brahmi, Amla</li><li>🌿 <strong>Taste:</strong> Sweet, Bitter, Astringent</li><li>🌿 <strong>Season:</strong> Summer, Early Autumn</li></ul>
          </div>
          <div className="dosha-card kapha reveal">
            <div className="dosha-symbol">🌊</div>
            <h3 className="dosha-name">Kapha</h3>
            <div className="dosha-element">Earth + Water</div>
            <p>Governs structure, immunity, lubrication, and stability. Kapha types are calm, loving, and strong — but prone to weight gain, congestion and lethargy when imbalanced.</p>
            <ul className="dosha-herbs"><li>🌿 <strong>Balancing herbs:</strong> Tulsi, Neem, Giloy, Triphala</li><li>🌿 <strong>Taste:</strong> Pungent, Bitter, Astringent</li><li>🌿 <strong>Season:</strong> Late Winter, Spring</li></ul>
          </div>
        </div>
      </div>
    </section>
  );
}
