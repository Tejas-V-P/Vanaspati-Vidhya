import React from 'react';

export default function Benefits() {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Why It Matters</div>
          <h2 className="section-title">Benefits of Traditional Medicine</h2>
          <p className="section-sub">Ayurveda is not alternative medicine — it is a complete, evidence-based system of preventive and curative healthcare with global relevance.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card reveal"><div className="benefit-icon">🧪</div><h3>Modern Validation</h3><p>Thousands of peer-reviewed studies confirm what Ayurvedic practitioners knew centuries ago — plant bioactives are pharmacologically active and clinically effective.</p></div>
          <div className="benefit-card reveal"><div className="benefit-icon">💊</div><h3>Fewer Side Effects</h3><p>Plant-based medicines work synergistically with the body. Properly prepared and dosed, they cause significantly fewer adverse reactions than synthetic pharmaceuticals.</p></div>
          <div className="benefit-card reveal"><div className="benefit-icon">🧠</div><h3>Holistic Approach</h3><p>Ayurveda treats the whole person — mind, body, and spirit. The tridosha system personalises treatment based on individual constitution (Prakriti) — precision medicine 5,000 years early.</p></div>
          <div className="benefit-card reveal"><div className="benefit-icon">♻️</div><h3>Sustainability</h3><p>Traditional herbal medicine is renewable and ecologically sustainable. Most plants are cultivable locally, reducing pharmaceutical supply chains and environmental footprint enormously.</p></div>
          <div className="benefit-card reveal"><div className="benefit-icon">💰</div><h3>Accessible Healthcare</h3><p>For 800 million rural Indians, kitchen herbs like Tulsi, Neem and Turmeric are the first — and often most effective — line of healthcare defence, requiring no prescription or expense.</p></div>
          <div className="benefit-card reveal"><div className="benefit-icon">🌍</div><h3>WHO Recognition</h3><p>The WHO Traditional Medicine Strategy 2025 recognises traditional systems as integral to achieving universal health coverage and the Sustainable Development Goals.</p></div>
        </div>
      </div>
    </section>
  );
}
