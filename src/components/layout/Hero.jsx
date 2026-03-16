import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-floats" aria-hidden="true">
        <span className="hf hf-1">🍃</span>
        <span className="hf hf-2">🌿</span>
        <span className="hf hf-3">🍀</span>
        <span className="hf hf-4">🌱</span>
        <span className="hf hf-5">🌾</span>
        <span className="hf hf-6">🌸</span>
      </div>
      <div className="hero-content">
        <div className="hero-badge">🌿 Indian Knowledge System — IKS Project</div>
        <h1 className="hero-title">Ancient Wisdom,<br/><em>Living Roots</em></h1>
        <p className="hero-subtitle">वनस्पति विद्या — The Science of Healing Plants</p>
        <p className="hero-desc">
          A comprehensive educational resource on India's sacred medicinal plants —
          exploring their Ayurvedic traditions, health benefits, and modern scientific
          validation as part of the IKS initiative under NEP 2020.
        </p>
        <div className="hero-cta">
          <a href="#plants" className="btn btn-primary">🌿 Explore 10 Plants</a>
          <a href="#iks" className="btn btn-outline">Learn About IKS</a>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
