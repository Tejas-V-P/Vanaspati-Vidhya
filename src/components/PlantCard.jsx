import React, { useState } from 'react';

export default function PlantCard({ plant }) {
  const [activeTab, setActiveTab] = useState('trad');
  const [imgError,  setImgError]  = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const TAB_LABELS = {
    trad:     'Traditional',
    benefits: 'Benefits',
    science:  'Science',
  };

  return (
    <article
      className="plant-card reveal"
      data-search-name={plant.id + ' ' + plant.name.toLowerCase() + ' ' + plant.latin.toLowerCase()}
      data-search-cat={plant.category.join(' ')}
      data-search-latin={plant.latin.toLowerCase()}
    >
      {/* ── Card Image Banner ── */}
      <div className={`card-img ${plant.bg}`}>

        {/* Real photo — fades in on load; falls back to emoji on error */}
        {plant.imageUrl && !imgError ? (
          <>
            <img
              src={plant.imageUrl}
              alt={`${plant.name} — ${plant.latin}`}
              className={`card-photo${imgLoaded ? ' loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="lazy"
              draggable="false"
            />
            <div className="card-photo-overlay" />
          </>
        ) : (
          <span className="card-emoji" role="img" aria-label={plant.name}>
            {plant.emoji}
          </span>
        )}

        {/* Latin name at bottom of image */}
        <div className="card-img-footer">
          <span className="card-latin">{plant.latin}</span>
        </div>

        {/* Badge */}
        <span className={`card-badge ${plant.badgeClass}`}>{plant.badge}</span>
      </div>

      {/* ── Card Body ── */}
      <div className="card-body">
        <h3 className="card-title">{plant.name}</h3>
        <p className="card-subtitle">{plant.subtitle}</p>
        <p className="card-desc">{plant.desc}</p>

        {/* ── Tab Buttons ── */}
        <div className="card-tabs" role="tablist" aria-label={`${plant.name} information tabs`}>
          {Object.entries(TAB_LABELS).map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              className={`tab-btn${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div
          className="tab-content"
          role="tabpanel"
          aria-label={`${plant.name} ${TAB_LABELS[activeTab]}`}
        >
          <ul>
            {plant.tabs[activeTab].map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
