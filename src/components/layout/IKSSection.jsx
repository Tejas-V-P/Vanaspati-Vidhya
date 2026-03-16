import React from 'react';

export default function IKSSection() {
  return (
    <section id="iks" className="section iks-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">About</div>
          <h2 className="section-title">Indian Knowledge System</h2>
        </div>
        <div className="iks-layout">
          <div className="iks-text reveal">
            <blockquote className="iks-quote">"Let food be thy medicine and medicine be thy food" — a principle embedded in Ayurveda thousands of years before modern science echoed it.</blockquote>
            <p>The <strong>Indian Knowledge System (IKS)</strong> is a vast, structured body of knowledge developed across millennia — encompassing <em>Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy (AYUSH)</em>. These systems are not superstition — they are rigorous frameworks born of centuries of clinical observation.</p>
            <p>Ancient texts like the <em>Charaka Samhita</em> (300 BCE), <em>Sushruta Samhita</em>, and <em>Ashtanga Hridayam</em> document sophisticated pharmacology, surgical techniques, and preventive medicine — much of which has since been validated by modern science.</p>
            <p>Under <strong>NEP 2020</strong>, the Government of India has formally integrated IKS into national education through the IKS Division, Ministry of Education.</p>
            <div className="iks-timeline">
              <div className="tl-item"><div className="tl-dot">📜</div><div><h4>~1500 BCE — Vedic Period</h4><p>Atharvaveda documents plant-based treatments for 77 diseases. Foundation of Ayurvedic pharmacology.</p></div></div>
              <div className="tl-item"><div className="tl-dot">🔬</div><div><h4>~300 BCE — Classical Texts</h4><p>Charaka Samhita systematises 341 plant drugs; Sushruta Samhita documents surgical use of herbs.</p></div></div>
              <div className="tl-item"><div className="tl-dot">🌍</div><div><h4>2019 — WHO Recognition</h4><p>WHO's Traditional Medicine Strategy 2019–2025 integrates traditional systems into universal healthcare.</p></div></div>
              <div className="tl-item"><div className="tl-dot">📚</div><div><h4>2020 — NEP Integration</h4><p>India's National Education Policy formally includes IKS as an academic discipline nationwide.</p></div></div>
            </div>
          </div>
          <div className="iks-cards reveal">
            <div className="iks-card"><div className="iks-icon">🌿</div><h3>8000+ Plant Species</h3><p>Documented for medicinal use in traditional texts — the world's most extensive botanical pharmacopoeia.</p></div>
            <div className="iks-card"><div className="iks-icon">📚</div><h3>NEP 2020 Included</h3><p>IKS formally integrated into Indian national education — taught across schools, colleges and research institutions.</p></div>
            <div className="iks-card"><div className="iks-icon">🔬</div><h3>Modern Validation</h3><p>Thousands of peer-reviewed studies confirm bioactive compounds predicted by Ayurvedic texts centuries ago.</p></div>
            <div className="iks-card"><div className="iks-icon">🌏</div><h3>WHO Recognised</h3><p>World Health Organization actively promotes traditional medicine systems for sustainable global healthcare.</p></div>
            <div className="iks-card"><div className="iks-icon">💊</div><h3>AYUSH Ministry</h3><p>Dedicated Indian ministry for Ayurveda, Yoga, Unani, Siddha and Homeopathy with global research centres.</p></div>
            <div className="iks-card"><div className="iks-icon">🧪</div><h3>Phytochemistry</h3><p>Science of plant chemicals reveals why ancient remedies work — validating traditional knowledge with molecular data.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
