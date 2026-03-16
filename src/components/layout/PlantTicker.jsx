import React, { useState, useEffect } from 'react';

export default function PlantTicker() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/api/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error("Failed to fetch ticker data", err));
  }, []);

  if (plants.length === 0) return null;

  // Triple the array to ensure a smooth CSS loop without gaps
  const tickerItems = [...plants, ...plants, ...plants];
  
  return (
    <div className="plant-ticker" aria-hidden="true">
      <div className="ticker-track">
        {tickerItems.map((p, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-emoji">{p.emoji}</span>
            {p.name}
          </span>
        ))}
      </div>
    </div>
  );
}
