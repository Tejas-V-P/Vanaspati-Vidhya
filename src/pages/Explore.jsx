import React, { useState, useEffect } from 'react';
import PlantFilter from '../components/PlantFilter.jsx';
import PlantsGrid from '../components/PlantsGrid.jsx';

export default function Explore() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Fetch plants from backend
  useEffect(() => {
    fetch('/api/plants')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setPlants(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter logic
  const filteredPlants = plants.filter(plant => {
    const matchCat = activeCategory === 'all' || plant.category.includes(activeCategory);
    if (!matchCat) return false;
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const searchString = `${plant.id} ${plant.name} ${plant.latin} ${plant.category.join(' ')}`.toLowerCase();
    return searchString.includes(query);
  });

  // Reattach scroll animations for fetched items
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.06 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredPlants, loading]);

  if (loading) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading Plants Data...</div>;
  if (error) return <div className="container" style={{ padding: '100px 0', color: 'red' }}>Error: {error}</div>;

  return (
    <>
      {/* Search Section */}
      <div className="search-section">
        <div className="container">
          <div className="search-box">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search plants — Tulsi, Brahmi, Triphala, Giloy…"
              aria-label="Search medicinal plants"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="search-clear"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                style={{ display: 'block' }}
              >
                ✕
              </button>
            )}
          </div>
          <p className="search-msg" aria-live="polite">
            {searchQuery && filteredPlants.length > 0 ? `Found ${filteredPlants.length} result(s)` : ''}
          </p>
        </div>
      </div>

      <section id="plants" className="section plants-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Explore</div>
            <h2 className="section-title">Medicinal Plants of India</h2>
            <p className="section-sub">Sacred, scientific, and timeless — each plant a universe of healing, culture, and chemistry.</p>
          </div>

          <PlantFilter activeCategory={activeCategory} onFilterChange={setActiveCategory} />
          <PlantsGrid plants={filteredPlants} />

          {filteredPlants.length === 0 && (
            <p className="no-results" style={{ display: 'block' }}>
              No plants match your search. Try "Tulsi", "Brahmi" or "Amla".
            </p>
          )}
        </div>
      </section>
    </>
  );
}
