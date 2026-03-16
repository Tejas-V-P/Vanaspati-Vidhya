import React from 'react';
import PlantCard from './PlantCard.jsx';

export default function PlantsGrid({ plants }) {
  return (
    <div className="plants-grid" id="plantsGridInner">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
