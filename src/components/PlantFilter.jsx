import React, { useState } from 'react';

export default function PlantFilter({ activeCategory, onFilterChange }) {
  const CATEGORIES = [
    { key: 'all',       label: '🌿 All Plants' },
    { key: 'immunity',  label: '🛡️ Immunity' },
    { key: 'digestive', label: '🌱 Digestive' },
    { key: 'stress',    label: '🧠 Stress & Brain' },
    { key: 'skin',      label: '✨ Skin & Topical' },
  ];

  function handleClick(cat) {
    onFilterChange(cat);
    // Visual reveal trick for the newly filtered items
    setTimeout(() => {
      document.querySelectorAll('.plant-card.reveal:not(.visible)').forEach(el => {
        el.classList.add('visible');
      });
    }, 50);
  }

  return (
    <div className="plant-filter" role="group" aria-label="Filter plants by category">
      {CATEGORIES.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn ${activeCategory === key ? ' active' : ''}`}
          onClick={() => handleClick(key)}
          aria-pressed={activeCategory === key}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
