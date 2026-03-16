import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <span className="footer-leaf">🌿</span>
              <div>
                <div className="footer-name">Vanaspati Vidya</div>
                <div className="footer-tagline">वनस्पति विद्या — The Science of Plants</div>
              </div>
            </div>
            <p className="footer-desc">A comprehensive educational resource on Indian medicinal plants, developed in support of the Indian Knowledge System (IKS) initiative under NEP 2020.</p>
          </div>
          <div className="footer-col">
            <h4>Pages</h4>
            <a href="#home">Home</a>
            <a href="#iks">About IKS</a>
            <a href="#plants">Medicinal Plants</a>
            <a href="#benefits">Benefits</a>
            <a href="#doshas">Ayurveda</a>
            <a href="#quiz">Quiz</a>
          </div>
          <div className="footer-col">
            <h4>Plants</h4>
            <a href="#plants">Tulsi · Neem</a>
            <a href="#plants">Turmeric · Ashwagandha</a>
            <a href="#plants">Aloe Vera · Amla</a>
            <a href="#plants">Brahmi · Giloy</a>
            <a href="#plants">Shatavari · Triphala</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="https://www.ayush.gov.in" target="_blank" rel="noreferrer">Ministry of AYUSH</a>
            <a href="https://www.ccras.nic.in" target="_blank" rel="noreferrer">CCRAS India</a>
            <a href="https://iksindia.org" target="_blank" rel="noreferrer">IKS Division MoE</a>
            <a href="https://www.who.int" target="_blank" rel="noreferrer">WHO</a>
            <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noreferrer">PubMed</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>🌱 Created for the <strong>Indian Knowledge System (IKS) Project</strong> — Promoting traditional wisdom in modern education under <strong>NEP 2020</strong>.</p>
          <p className="footer-disclaimer">⚠️ For educational purposes only. Consult a qualified Ayurvedic practitioner (Vaidya) before using herbal remedies medicinally.</p>
        </div>
      </div>
    </footer>
  );
}
